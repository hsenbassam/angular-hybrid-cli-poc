import './app';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app-ng7/app.module';
// tslint:disable-next-line:no-submodule-imports
import { UpgradeModule } from '@angular/upgrade/static';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
	// tslint:disable
	const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
	// I needed to bootstrap the application in the app module instead of the here because of the error
	// Trying to get the AngularJS injector before it being set
	// upgrade.bootstrap(document.documentElement, ['ngHybridApp']);
});
