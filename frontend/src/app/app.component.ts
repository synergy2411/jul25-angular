import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers : [UserService]
})
export class AppComponent {
  title = 'The Frontend App';
  toggle = true;

  // authService = inject(AuthService);  // Used in standalone Apps

  constructor(public authService: AuthService) {}
}
