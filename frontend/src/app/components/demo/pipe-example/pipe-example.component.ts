import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
})
export class PipeExampleComponent {
  promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });

  contactNumber = 9876543210;

  greeting = 'Hello World';

  todoCollection = [
    { label: 'grocery', status: 'pending' },
    { label: 'shopping', status: 'completed' },
    { label: 'plating', status: 'pending' },
    { label: 'cooking', status: 'completed' },
  ];

  filteredStatus = '';

  onAddNewItem() {
    //  Impure Change
    this.todoCollection.push({ label: 'New Todo', status: 'pending' });

    // Pure Change
    // let newTodo = { label: 'New Todo', status: 'pending' };
    // this.todoCollection = [newTodo, ...this.todoCollection];
  }
}
