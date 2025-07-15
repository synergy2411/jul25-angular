import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from '../../../model/expense';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: IExpense;

  @Output() deleteExpenseEvent = new EventEmitter<string>();

  onDelete() {
    if (
      confirm(
        'Are you sure to delete this item - ' +
          this.expense.title.toUpperCase() +
          '?'
      )
    )
      this.deleteExpenseEvent.emit(this.expense.id);
  }
}
