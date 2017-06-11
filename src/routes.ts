import * as express from 'express';
import { RouterMap } from "./decorators/Web";

import IndexController from "./controllers/IndexController";

new IndexController();

export function init(app:any) {
	RouterMap.__DecoratedRouters.forEach((controller: any, config: any) => {
		let controllers = Array.isArray(controller) ? controller : [controller]
		controllers.forEach((controller) => {
			app[config.method](config.path, controller);
		})
	});
}
