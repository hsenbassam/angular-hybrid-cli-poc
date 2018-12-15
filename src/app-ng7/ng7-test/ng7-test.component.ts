import { Component, OnInit, VERSION } from '@angular/core';
import { LogService } from './../../app-ng1/services/log-service';
// tslint:disable
@Component({
  selector: 'ng7-test',
  templateUrl: './ng7-test.component.html'
})
export class Ng7TestComponent implements OnInit {

  version: string;
  responseFromNg1Service: string;

  constructor(private logService: LogService) {
    console.log('Calling Ng7Component Constructor');
    this.version = VERSION.full;
  }

  ngOnInit(): void {
    this.responseFromNg1Service = this.logService.sayHello('Angular User');
  }
}

