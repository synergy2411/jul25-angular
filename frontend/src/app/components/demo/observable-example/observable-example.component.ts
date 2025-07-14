import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent {
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
