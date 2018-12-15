// tslint:disable
import * as angular from 'angular';

export class Ng1TestController {

	version: string;

	constructor() {
		console.log('Calling Ng1Controller Constructor');
		this.version = angular.version.full;
	}
}

export default angular.module('ngHybridApp.ng1test', [])
	.component('ng1Test', {
		templateUrl: 'ng1-test.template.html',
		controller: Ng1TestController,
		controllerAs: 'ng1TestCtrl'
	});