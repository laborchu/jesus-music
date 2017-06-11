import { resolve } from 'path';

import * as codeChangeTool from './code_change_tools';
import Config from '../../config';


export function expressDev() {
  codeChangeTool.listen();
}


export function notifyLiveReload(e?:any) {
	let fileName = e?e.path:[];
  codeChangeTool.changed(fileName);
}
