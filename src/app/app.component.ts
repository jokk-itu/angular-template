import { Component } from '@angular/core';
import * as DKFDS from 'dkfds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dkfds-sample-app';

  constructor() {}

  ngOnInit() {
    DKFDS.init();
  }
}
