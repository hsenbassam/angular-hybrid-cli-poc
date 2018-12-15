// tslint:disable
import * as angular from 'angular';

export class LogService {

	constructor() {}
	
	sayHello(name: string) {
		return "You Just call the Ng1 Service (LogService), Hello " + name;
	}
}

var app = angular.module('ngHybridApp.log', [])
	.service('logService', LogService);
