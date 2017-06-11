import { watch } from '../../utils';
import Config from '../../config';
import { join } from 'path';

/**
 * Executes the build process, watching for file changes and rebuilding the development environment.
 */
export = watch('copy.server.assets', "", 
	[
	join(Config.SERVER_SRC, '**/*.html'), 
	join(Config.PUBLIC_SRC, '**/*', ), 
	'!'+join(Config.PUBLIC_SRC, 'ts/*', ), 
	'!'+join(Config.PUBLIC_SRC, '**/*.scss', )
	]);
