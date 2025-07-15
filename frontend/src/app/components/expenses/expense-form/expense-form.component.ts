import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IExpense } from '../../../model/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output() expenseItemEvent = new EventEmitter<IExpense>();

  onSubmit(expenseForm: NgForm) {
    this.expenseItemEvent.emit(expenseForm.value);
  }
}
