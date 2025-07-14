import {
  Component,
  Host,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  // providers : [UserService]
})
export class UsersComponent implements OnInit, OnDestroy {
  users!: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.users = this.userService.getUserData();
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
