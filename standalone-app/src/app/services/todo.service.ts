import { Injectable } from '@angular/core';
import { from } from 'rxjs';

interface Todo {
  label: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = [
    { label: 'shopping', status: 'done' },
    { label: 'grocery', status: 'pending' },
    { label: 'planting', status: 'done' },
  ];

  getPendingTodos() {
    return this.todos.filter((todo) => todo.status === 'pending');
  }

  getPromiseData(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 1000);
    });
  }

  getObservableData() {
    return from(this.todos);
  }

  constructor() {}
}
