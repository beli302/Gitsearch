import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearch-service/gitsearch.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;
  repos:any;
  username:string;

  constructor(private gitsearchService: GitsearchService) {

   }
   findProfile(){
    this.gitsearchService.updateProfile(this.username);
    this.gitsearchService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });
    this.gitsearchService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
