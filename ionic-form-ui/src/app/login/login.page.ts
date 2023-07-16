import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class loginPage {
  username: string;
  password: string;
  loginFailed: boolean = false;

  constructor(private navCtrl: NavController,private router: Router, private http: HttpClient) {}

 

  validateForm(): boolean {
    
    this.http.get('assets/users.xml', { responseType: 'text' }).subscribe(
      (xmlData) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        // Extract user data from the XML
        const users = xmlDoc.getElementsByTagName('user');
        let authenticated = false;

        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          const xmlUsername = user.getElementsByTagName('username')[0]?.textContent;
          const xmlPassword = user.getElementsByTagName('password')[0]?.textContent;

          if (this.username === xmlUsername && this.password === xmlPassword) {
            authenticated = true;
            break;
          }
        }

        if (authenticated) {
          // Login successful
          this.router.navigate(['/espes'], { queryParams: { username: this.username} });
          this.username = '';
          this.password = '';
        }  else {
          // Login failed
          this.loginFailed = true;
          console.log('Invalid username or password');
        }
      },
      (error) => {
        // Handle error
        console.log('Error: ', error);
      }
    );
    return true;
  }

}