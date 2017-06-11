import * as gulp from 'gulp';
import { join } from 'path';
import * as webpack from 'webpack';
import * as webpackStream from 'webpack-stream';
import Config from '../../config';
import { notifyLiveReload } from '../../utils';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
	gulp.src(Config.TS_SRC + '/main.tsx')
		.pipe(webpackStream({
			watch: true,
			// resolve: {
			// 	extensions: ['', '.ts', '.tsx', '.js']
			// },
			module: {
				loaders: [
					{ test: /\.tsx?$/, loader: "ts-loader" },
					{ test: /\.json$/, loader: 'json-loader'}
				]
			},
			output: {
				filename: '[name].js',
			}
			// resolveLoader: { fallback: join(__dirname, "node_modules") }
		}, null, function(err: Error, stats: webpack.Stats) {
			console.log(stats.toString("minimal"));
			notifyLiveReload();
		}).on('error', (err: Error) => {
			console.log(err);
		}))
		.pipe(gulp.dest(Config.JS_DEST));
};

