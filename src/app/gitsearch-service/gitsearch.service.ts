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
  
    this.username = 'beli302';
  }
  getPictureInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.auth_token).map(result=>result);
  }
  getPictureRepos() {
    return this.http.get("https://api.github.com/users/" + this.username+'/repos?access_token' + this.auth_token).map(result=>result);
  }
  updatePicture(username: string) {
    this.username = username;
  }
}
