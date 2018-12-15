// tslint:disable
import { Injector } from "@angular/core";
import { LogService } from "./app-ng1/services/log-service";

export function logServiceFactory($injector: Injector) {
	return $injector.get('logService');
}

export const logServiceProvider = {
	provide: LogService,
	useFactory: logServiceFactory,
	deps: ['$injector']
};
