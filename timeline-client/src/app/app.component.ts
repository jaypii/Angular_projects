import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myDate = new Date();
  isAuthenticated: boolean;
  
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
/*   
  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  } */
  
  login() {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/'
    });
  }
  logout() {
    this.oktaAuth.signOut();
  }
}