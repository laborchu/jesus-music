import { watch } from '../../utils';
import Config from '../../config';
import { join } from 'path';

/**
 * Executes the build process, watching for file changes and rebuilding the development environment.
 */
export = watch('build.server', Config.SERVER_SRC, [join(Config.SERVER_SRC, '**/*.ts')]);
