import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../gitsearch-service/gitsearch.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserPictureComponent implements OnInit {

  picture: any;
  repos:any;
  username:string;

  constructor(private gitsearchService: GitsearchService) {

   }
   findPicture(){
    this.gitsearchService.updatePicture(this.username);
    this.gitsearchService.getPictureInfo().subscribe(picture =>{
      console.log(picture);
      this.picture = picture;
    });
    this.gitsearchService.getPictureRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
    this.username = 'beli302';
    this.gitsearchService.getPictureInfo().subscribe(picture =>{
      console.log(picture);
      this.picture = picture;
    });

    this.gitsearchService.getPictureRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

}
