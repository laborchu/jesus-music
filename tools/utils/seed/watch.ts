import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as runSequence from 'run-sequence';
import * as child from 'child_process';

import Config from '../../config';
import { changeFileManager } from './code_change_tools';
import { notifyLiveReload } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * Watches the task with the given taskname.
 * @param {string} taskname - The name of the task.
 */
export function watch(taskname: string, root: string = Config.SERVER_SRC, paths: string[] = [join(root, '**')]) {
  return function() {
    plugins.watch(paths, (e: any) => {
      changeFileManager.addFile(e.path);


      // Resolves issue in IntelliJ and other IDEs/text editors which
      // save multiple files at once.
      // https://github.com/mgechev/angular-seed/issues/1615 for more details.
      setTimeout(() => {

        runSequence(taskname, () => {
          changeFileManager.clear();
          if (Config.SERVER_SRC === root) {
            child.execSync("pm2 restart all");
            setTimeout(function() {
              notifyLiveReload(e);
            }, 2000);
          } else {
            notifyLiveReload(e);
          }
        });

      }, 100);
    });
  };
}
