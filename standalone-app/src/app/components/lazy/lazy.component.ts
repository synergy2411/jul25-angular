import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.css',
})
export class LazyComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  onDetech() {
    this.cdRef.detach();
  }

  onReattach() {
    this.cdRef.reattach();
  }
}
