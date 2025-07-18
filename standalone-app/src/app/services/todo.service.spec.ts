import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should return all todos when the observable subscribed', (done: DoneFn) => {
    service.getObservableData().subscribe((todos) => {
      expect(todos).not.toBeUndefined();
    });
    done();
  });

  it('should return all todos when the promise resolve', (done: DoneFn) => {
    service.getPromiseData().then((todos) => {
      expect(todos).not.toBeUndefined();
      done();
    });
  });

  it('should return pending todos', () => {
    const pendingTodos = service.getPendingTodos();
    expect(pendingTodos.length).not.toBeLessThan(1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
