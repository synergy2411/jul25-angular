import { Component } from '@angular/core';

@Component({
  selector: 'app-the-test',
  standalone: true,
  imports: [],
  templateUrl: './the-test.component.html',
  styleUrl: './the-test.component.css',
})
export class TheTestComponent {
  username = 'John Doe';
}
