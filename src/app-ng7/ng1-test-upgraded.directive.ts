import { Directive, ElementRef, Injector } from '@angular/core';
// tslint:disable-next-line:no-submodule-imports
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: 'ng1-test'
})
export class Ng1TestDirective extends UpgradeComponent {
	constructor(elementRef: ElementRef, injector: Injector) {
		// tslint:disable-next-line:no-console
		console.log('Calling Ng1 Directive');
		super('ng1Test', elementRef, injector);
	}
}
