import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { xml2js, js2xml, ElementCompact } from 'xml-js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  username: string;
  email: string;
  password: string;

  constructor(private http: HttpClient) {}

  register() {
    // Load existing XML data
    this.http.get('assets/users.xml', { responseType: 'text' }).subscribe((data: string) => {
      const usersXml = data;

      // Convert XML to JavaScript object
      const users: ElementCompact = xml2js(usersXml, { compact: true }) as ElementCompact;

      // Retrieve existing users or initialize an empty array
      const existingUsers = users['users'] ? (Array.isArray(users['users']['user']) ? users['users']['user'] : [users['users']['user']]) : [];


      // Create a new user object
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      // Add the new user to the existing users array
      existingUsers.push(newUser);

      // Update the users object
      users['users'] = { user: existingUsers };

      // Convert the JavaScript object back to XML
      const updatedXml = js2xml(users, { compact: true });

      // Write the updated XML data back to the file
      this.http
        .post('assets/users.xml', updatedXml, { responseType: 'text' })
        .subscribe(() => {
          console.log('Registration successful!');
          // Reset form fields
          this.username = '';
          this.email = '';
          this.password = '';
        });
    });
  }
}
