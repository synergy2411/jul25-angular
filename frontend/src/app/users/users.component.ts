import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../model/user';
import { USER_DATA } from '../data/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit, OnDestroy {
  user!: IUser;

  constructor() {}

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(theUser: IUser) {
    alert(
      `Mr. ${theUser.lastName.toUpperCase()} is working with ${
        theUser.company
      }!`
    );
  }

  ngOnDestroy(): void {}
}
