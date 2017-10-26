
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;
  contacts: any;

  constructor(private _http: Http) { }

  getUsers() {
    console.log("working")
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  getcontacts() {
    return this._http.get("/api/contacts")
      .map(result =>
        this.contacts = result.json().data
      )
  }

  addcontacts(Text3) {
    console.log(Text3)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post("api/contacts", Text3, { headers: headers })
      .map(result => this.contacts = result.json().data)

  }

  deletecontact(id) {
    console.log(id)
    return this._http.delete("api/contact/" + id)
      .map(result =>
        this.contacts = result.json().data
      )
  }

  updatecontact(id,Text3) {
    console.log(Text3)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put("api/contact/"+id, Text3, { headers: headers })
      .map(result => this.contacts = result.json().data)
  }

}