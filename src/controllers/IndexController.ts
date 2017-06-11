import e = require('express');
import BaseController from "./BaseController";
import { router } from "../decorators/Web";

class IndexController extends BaseController {
	@router({
		method: 'get',
		path: '/'
	})
	async index(req: e.Request, res: e.Response) {
		res.render('index', {});
	}
}

export default IndexController
