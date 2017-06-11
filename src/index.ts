import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import session = require('express-session');
import cookieParser = require('cookie-parser');
import ejs = require('ejs');

let env = require("./env.json");

var app = express();
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/views');
app.use(cookieParser());

export function init(port: number, mode: string) {

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.text());
  app.use(compression());

  app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });


  /**
   * Dev Mode.
   * @note Dev server will only give for you middleware.
   */
  if (mode == 'dev') {
    let root = path.resolve(process.cwd());
    let clientRoot = path.resolve(__dirname, 'public');
    app.use(express.static(root));
    app.use(express.static(clientRoot));

    //初始化路由
    let routes = require('./routes');
    routes.init(app);
    
    
  } else {
    let _clientDir = '../../client/prod';

    /**
     * Static.
     */
    app.use('/js', express.static(path.resolve(__dirname, _clientDir + '/js')));
    app.use('/css', express.static(path.resolve(__dirname, _clientDir + '/css')));
    app.use('/assets', express.static(path.resolve(__dirname, _clientDir + '/assets')));
    app.use('/fonts', express.static(path.resolve(__dirname, _clientDir + '/fonts')));

    //初始化路由
    let routes = require('./routes');
    routes.init(app);

    /**
     * Spa Res Sender.
     * @param req {any}
     * @param res {any}
     */
    var renderIndex = function(req: express.Request, res: express.Response) {
      res.sendFile(path.resolve(__dirname, _clientDir + '/index.html'));
    };

    /**
     * Prevent server routing and use @ng2-router.
     */
    app.get('/*', renderIndex);
  }

  /**
   * Server with gzip compression.
   */
  return new Promise<http.Server>((resolve, reject) => {
    let server = app.listen(port, () => {
      var port = server.address().port;
      console.log('App is listening on port:' + port);
      resolve(server);
    });
  });
};
