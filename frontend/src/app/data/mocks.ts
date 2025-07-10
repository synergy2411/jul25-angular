import { IUser } from '../model/user';

export const USER_DATA: IUser = {
  firstName: 'bill',
  lastName: 'gates',
  company: 'Microsoft',
  isWorking: true,
  income: 50000,
  dob: new Date('Dec 01, 1965'),
  avatar: './assets/images/bill.jpeg',
  votes: 120,
};
