import { Component, OnInit } from '@angular/core';
import { Auth } from "aws-amplify";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any;


  constructor() { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then(user => {
        console.log(user);
        this.user = user;
      }
    ).catch(err => {
        console.log(err);
      }
    );
  }

}
