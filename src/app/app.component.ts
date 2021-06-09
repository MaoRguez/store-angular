import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html', cuando el html es más de una línea
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
