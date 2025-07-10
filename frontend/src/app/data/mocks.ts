import { IUser } from '../model/user';

export const USER_DATA: IUser[] = [
  {
    firstName: 'bill',
    lastName: 'gates',
    company: 'Microsoft',
    isWorking: true,
    income: 50000,
    dob: new Date('Dec 01, 1965'),
    avatar: './assets/images/bill.jpeg',
    votes: 120,
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    company: 'Apple',
    isWorking: false,
    income: 0,
    dob: new Date('Aug 21, 1964'),
    avatar: './assets/images/steve.jpg',
    votes: 180,
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    company: 'World Wide Web',
    isWorking: true,
    income: 30000,
    dob: new Date('Sep 3, 1965'),
    avatar: './assets/images/tim.jpeg',
    votes: 80,
  },
];
