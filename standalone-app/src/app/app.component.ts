import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputComponent } from './components/output/output.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'standalone-app';
}
