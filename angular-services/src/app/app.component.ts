import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <app-card></app-card>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';
}
