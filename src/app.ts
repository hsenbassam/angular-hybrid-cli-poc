import * as angular from 'angular';

import './app.module.ng1.ts';

import './app-ng1/ng1-test/ng1-test.component';
import './app-ng1/services/log-service';

import './upgraded-services.module.ng1';

angular.module('ngHybridApp', [
	'ngHybridApp.log',
	'ngHybridApp.ng1test'
]);
