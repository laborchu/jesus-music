import { join, basename } from 'path';
import { BuildType, InjectableDependency } from './seed.config.interfaces';
import { argv } from 'yargs';


/**
 * The enumeration of available environments.
 * @type {Environments}
 */
export const BUILD_TYPES: BuildType = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod'
};

export class SeedConfig {


  constructor() {
  }

  BUILD_TYPE = getBuildType();
  /**
   * 项目路径
   */
  PROJECT_ROOT = join(__dirname, '../..');

  /*************** DIST CONFIG START *********************/
  /**
  * The base folder for built files.
  * @type {string}
  */
  DIST_DIR = 'dist';

  /**
   * The folder for temporary files.
   * @type {string}
   */
  TMP_DIR = `${this.DIST_DIR}/tmp`;

  /**
     * The folder for built server files in the `dev` environment.
     * @type {string}
     */
  SERVER_DEV_DEST = `${this.DIST_DIR}/dev`;

  /**
   * The folder for the built server files in the `prod` environment.
   * @type {string}
   */
  SERVER_PROD_DEST = `${this.DIST_DIR}/prod`;

  /**
    * The folder for the built server files, corresponding to the current environment.
    * @type {string}
    */
  SERVER_DEST = this.BUILD_TYPE === BUILD_TYPES.DEVELOPMENT ? this.SERVER_DEV_DEST : this.SERVER_PROD_DEST;

  /**
    * @type {string}
    */
  SERVER_PUBLIC_DEST = `${this.SERVER_DEST}/public`;

  /**
     * @type {string}
     */
  SASS_DEST = `${this.SERVER_PUBLIC_DEST}/css`;

  /**
     * @type {string}
     */
  JS_DEST = `${this.SERVER_PUBLIC_DEST}/js`;

  /*************** DIST CONFIG END *********************/

  /*************** BUNDLE CONFIG START *********************/
  /**
   * The name of the bundle file to includes all CSS files.
   * @type {string}
   */
  CSS_PROD_BUNDLE = 'main.css';
  /**
   * The name of the bundle file to include all JavaScript shims.
   * @type {string}
   */
  JS_PROD_SHIMS_BUNDLE = 'shims.js';

  /**
   * The name of the bundle file to include all JavaScript application files.
   * @type {string}
   */
  JS_PROD_APP_BUNDLE = 'app.js';

  /*************** BUNDLE CONFIG END *********************/


  /*************** SERVER CONFIG START *********************/
  /**
   * The port where the application will run.
   * The default port is `5555`, which can be overriden by the  `--port` flag when running `npm start`.
   * @type {number}
   */
  PORT = argv['port'] || 5555;
  /**
    * server src路径
    * @type {string}
    */
  SERVER_SRC = `src`;
  /**
    * server src路径
    * @type {string}
    */
  PUBLIC_SRC = `${this.SERVER_SRC}/public`;

  /**
     * @type {string}
     */
  TS_SRC = `${this.PUBLIC_SRC}/ts`;

  /**
     * @type {string}
     */
  SASS_SRC = `${this.PUBLIC_SRC}/sass`;
  /*************** SERVER CONFIG END *********************/

  /*************** TOOLS CONFIG START *********************/
  /**
    * The directory of the applications tools
    * @type {string}
    */
  TOOLS_DIR = 'tools';

  /**
   * 种子任务
   */
  SEED_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
  /**
   * 种子组合任务
   */
  SEED_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'seed.tasks.json');

  /**
   * 项目任务
   */
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  /**
   * 项目任务
   */
  PROJECT_COMPOSITE_TASKS = join(process.cwd(), this.TOOLS_DIR, 'config', 'project.tasks.json');

  /**
     * The build interval which will force the TypeScript compiler to perform a typed compile run.
     * Between the typed runs, a typeless compile is run, which is typically much faster.
     * For example, if set to 5, the initial compile will be typed, followed by 5 typeless runs,
     * then another typed run, and so on.
     * If a compile error is encountered, the build will use typed compilation until the error is resolved.
     * The default value is `0`, meaning typed compilation will always be performed.
     * @type {number}
     */
  TYPED_COMPILE_INTERVAL = 0;
  /*************** TOOLS CONFIG END *********************/

  /*************** APP CONFIG END *********************/
  /**
   * The path for the base of the application at runtime.
   * The default path is based on the environment '/',
   * which can be overriden by the `--base` flag when running `npm start`.
   * @type {string}
   */
  APP_BASE = argv['base'] || '/';


  /**
     * Enable SCSS stylesheet compilation.
     * Set ENABLE_SCSS environment variable to 'true' or '1'
     * @type {boolean}
     */
  ENABLE_SCSS = ['true', '1'].indexOf(`${process.env.ENABLE_SCSS}`.toLowerCase()) !== -1 || argv['scss'] || false;

  /**
   * The name of the TypeScript project file
   * @type {string}
   */
  APP_PROJECTNAME = 'tsconfig.json';
  /*************** APP CONFIG END *********************/

  /**
    * The Autoprefixer configuration for the application.
    * @type {Array}
    */
  BROWSER_LIST = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  NPM_DEPENDENCIES: InjectableDependency[] = [
  ];


  /**
   * Configurations for NPM module configurations. Add to or override in project.config.ts.
   * If you like, use the mergeObject() method to assist with this.
   */
  PLUGIN_CONFIGS: any = {
    /**
     * The BrowserSync configuration of the application.
     * The default open behavior is to open the browser. To prevent the browser from opening use the `--b`  flag when
     * running `npm start` (tested with serve.dev).
     * Example: `npm start -- --b`
     * @type {any}
     */
    'browser-sync': {
      proxy: 'http://localhost:9001',
      notify: false,
      port: this.PORT
    },

    // Note: you can customize the location of the file
    'environment-config': join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),

    /**
     * The options to pass to gulp-sass (and then to node-sass).
     * Reference: https://github.com/sass/node-sass#options
     * @type {object}
     */
    'gulp-sass': {
      includePaths: ['./node_modules/']
    },

    /**
     * The options to pass to gulp-concat-css
     * Reference: https://github.com/mariocasciaro/gulp-concat-css
     * @type {object}
     */
    'gulp-concat-css': {
      targetFile: this.CSS_PROD_BUNDLE,
      options: {
        rebaseUrls: false
      }
    }
  };

  /*************** APP FUNCTION START *********************/

  /**
     * Locate a plugin configuration object by plugin key.
     * @param {any} pluginKey The object key to look up in PLUGIN_CONFIGS.
     */
  getPluginConfig(pluginKey: string): any {
    if (this.PLUGIN_CONFIGS[pluginKey]) {
      return this.PLUGIN_CONFIGS[pluginKey];
    }
    return null;
  }

  getInjectableStyleExtension() {
    return this.BUILD_TYPE === BUILD_TYPES.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
  }

  /*************** APP FUNCTION END *********************/

 
}

/**
   * Normalizes the given `deps` to skip globs.
   * @param {InjectableDependency[]} deps - The dependencies to be normalized.
   */
export function normalizeDependencies(deps: InjectableDependency[]) {
  deps
    .filter((d: InjectableDependency) => !/\*/.test(d.src)) // Skip globs
    .forEach((d: InjectableDependency) => d.src = require.resolve(d.src));
  return deps;
}

/**
 * Returns if the given dependency is used in the given environment.
 * @param  {string}               env - The environment to be filtered for.
 * @param  {InjectableDependency} d   - The dependency to check.
 * @return {boolean}                    `true` if the dependency is used in this environment, `false` otherwise.
 */
function filterDependency(type: string, d: InjectableDependency): boolean {
  const t = d.buildType || d.env;
  d.buildType = t;
  if (!t) {
    d.buildType = Object.keys(BUILD_TYPES).map(k => BUILD_TYPES[k]);
  }
  if (!(d.buildType instanceof Array)) {
    (<any>d).env = [d.buildType];
  }
  return d.buildType.indexOf(type) >= 0;
}


/**
 * Returns the application build type.
 */
function getBuildType() {
  let type = (argv['build-type'] || argv['env'] || '').toLowerCase();
  let base: string[] = argv['_'];
  let prodKeyword = !!base.filter(o => o.indexOf(BUILD_TYPES.PRODUCTION) >= 0).pop();
  if ((base && prodKeyword) || type === BUILD_TYPES.PRODUCTION) {
    return BUILD_TYPES.PRODUCTION;
  } else {
    return BUILD_TYPES.DEVELOPMENT;
  }
}
