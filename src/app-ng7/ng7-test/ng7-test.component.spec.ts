// tslint:disable-next-line:no-submodule-imports
import { TestBed, async } from '@angular/core/testing';
import { Ng7TestComponent } from './ng7-test.component';
import { LogService } from '../../app-ng1/services/log-service';

describe('Ng7TestComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				Ng7TestComponent
			],
			providers: [
				{ provide: LogService, useValue: {} }
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(Ng7TestComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

});
