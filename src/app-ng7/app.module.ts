import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:no-submodule-imports
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Ng7TestComponent } from './ng7-test/ng7-test.component';
import { Ng1TestDirective } from './ng1-test-upgraded.directive';
import { logServiceProvider } from '../upgraded-services.module.ng1';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: Ng7TestComponent
	}
];

@NgModule({
	declarations: [
		AppComponent,
		Ng7TestComponent,
		Ng1TestDirective
	],
	imports: [
		BrowserModule,
		UpgradeModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		logServiceProvider,
		{ provide: '$scope', useExisting: '$rootScope' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor(upgrade: UpgradeModule) {
		// I needed to bootstrap the application here instead of the main.ts because of the error:
		// Trying to get the AngularJS injector before it being set
		upgrade.bootstrap(document.documentElement, ['ngHybridApp']);
	}
	ngDoBootstrap() {
		// empty
	}
}
