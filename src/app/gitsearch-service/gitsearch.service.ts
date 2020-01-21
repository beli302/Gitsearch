import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
  username: string;
  auth_token = "0975f9b71c7c550230b0fc01dac8f1742b8decb8";

  constructor(private http: HttpClient) {
    console.log("Service is now ready!");
    this.username = 'beli302';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.auth_token).map(result=>result);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username+'/repos?access_token' + this.auth_token).map(result=>result);
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
