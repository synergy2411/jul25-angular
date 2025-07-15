import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  interval,
  of,
  from,
  fromEvent,
  tap,
  take,
  filter,
  map,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent implements OnInit {
  interval$ = interval(1000);

  of$ = of('Monica', 'Rachel', 'Joey', 'Chandler');

  from$ = from([99, 98, 95, 92, 100]);

  fromEvent$ = fromEvent(document, 'click')
    .pipe(tap((value) => console.log('Click : ', value)))
    .subscribe(console.log);

  ngOnInit(): void {
    // const subject = new Subject();
    // const subject = new BehaviorSubject(99);
    // const subject = new ReplaySubject(2);
    const subject = new AsyncSubject();

    subject.subscribe((data) => console.log('Subs 1 : ', data));

    subject.next(98);
    subject.next(99);
    subject.next(101);

    subject.subscribe((data) => console.log('Subs 2 : ', data));

    subject.next(102);
    subject.complete();
  }

  onIntervalSubscribe() {
    this.interval$
      .pipe(
        filter((value) => value % 2 === 0),
        take(5),
        map((value) => value * 2)
      )
      .subscribe(console.log);
    // this.of$.subscribe(console.log);
    // this.from$.subscribe(console.log);
  }

  obs$ = new Observable((observer) => {
    console.log('Inside Observable');
    setTimeout(() => observer.next('First Package'), 1000);
    // observer.complete();
    setTimeout(() => observer.next('Second Package'), 1500);
    setTimeout(() => observer.next('Third Package'), 2000);
    setTimeout(() => observer.error(new Error('Something went wrong!')), 3000);
    setTimeout(() => observer.complete(), 500);
  });

  promise = new Promise((resolve, reject) => {
    console.log('Inside Promise');
    setTimeout(() => resolve('Promise resolved after 1.5s'), 1500);
  });

  unSub$!: Subscription;

  onSubscribe() {
    console.log('Start');
    this.unSub$ = this.obs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.error(err),
      complete: () => console.log('[COMPLETED]'),
    });
    console.log('End');
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }

  consumePromise() {
    this.promise.then(console.log);
  }
}
