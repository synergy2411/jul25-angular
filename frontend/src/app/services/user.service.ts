import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';

@Injectable({
  providedIn: 'root',
})

// @Injectable()
export class UserService {
  constructor() {}

  getUserData() {
    return USER_DATA;
  }
}

// Self-Registering & Tree-shaking : The service will not become the part of final bundle,
// if it is not being used.

// - root :
// > register the service in the root of the app
// > Singletone effect will be applicable application-wide

// - platform :
// > register the service in the platform (Browser window)
// > Singleton instance applicable to all apps running in the same window

// - any :
// > used for Lazy loading of service with modules
