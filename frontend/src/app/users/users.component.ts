import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft',
    isWorking: true,
    income: 50000,
    dob: new Date('Dec 01, 1965'),
    avatar: './assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(theUser: any) {
    alert(
      `Mr. ${theUser.lastName.toUpperCase()} is working with ${
        theUser.company
      }!`
    );
  }
}
