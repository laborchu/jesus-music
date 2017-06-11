import * as gulp from 'gulp';
import { join } from 'path';

import Config from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
      join(Config.SERVER_SRC, '**/*.*'),
	  '!' + join(Config.SERVER_SRC, '**/*.ts'),
	  '!' + join(Config.PUBLIC_SRC, 'ts/*'),
	  '!' + join(Config.SERVER_SRC, '**/*.scss'),
      '!' + join(Config.SERVER_SRC, 'tsconfig.json')
    ])
    .pipe(gulp.dest(Config.SERVER_DEST));
};
