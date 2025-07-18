import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
  computed,
  effect,
} from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { CommonModule } from '@angular/common';
import { interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ReversePipe, CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputComponent implements OnInit, OnDestroy {
  interval$ = interval(1000);
  unsub$!: Subscription;

  todos = [
    { label: 'shopping', status: 'done' },
    { label: 'planting', status: 'pending' },
    { label: 'grocery', status: 'done' },
  ];

  greetings = 'Hello World!';

  counter = signal(0);

  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('Counter Value Change to : ', this.counter()));
  }

  ngOnInit(): void {
    // this.unsub$ = this.interval$
    //   .pipe(tap((val) => console.log('TAP - ', val)))
    //   .subscribe(console.log);
  }

  increase() {
    // this.counter += 1;
    this.counter.set(this.counter() + 1);
    // debugger;
  }

  decrease() {
    // this.counter -= 1;
    this.counter.update((prevValue) => prevValue - 1);
  }

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }
}
