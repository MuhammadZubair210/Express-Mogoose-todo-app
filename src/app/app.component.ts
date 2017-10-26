import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text2: any;
  number: String;

  // Define a users property to hold our user data
  users: Array<any>;
  Contacts: any;
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService, private _http: Http) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
      .subscribe((res) => {
        this.users = res;
        console.log(res);
      });
    this._dataService.getcontacts()
      .subscribe((contacts) => {
        this.Contacts = contacts
        console.log(contacts)
      });
  }

  text1: String;
  // submit() {
  //   this._dataService.addcontacts({ name: this.text1 }).subscribe((contacts) => {
  //     console.log(contacts);
  //   })
  // }

  show() {
    this._dataService.getcontacts().subscribe((contacts) => {
      this.Contacts = contacts
      console.log(contacts)
    })
  }

  delcontact(i) {
    this._dataService.deletecontact(i).subscribe((contact) => {
      console.log(contact);
    })
  }

  data: String;
  updatecontact(i) {
    this._dataService.updatecontact(i, { name: this.data }).subscribe((contact) => {
      console.log(contact);
    })
  }

  submit1() {
    this._dataService.addcontacts({ name: this.text1, fname: this.text2, phonenumber: this.number }).subscribe((contacts) => {
      console.log(contacts);
    })
  }
}