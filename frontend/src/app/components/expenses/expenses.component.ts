import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { IExpense } from '../../model/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenses!: IExpense[];
  addExpenseToggle = false;

  constructor(private expenseService: ExpensesService) {}

  ngOnInit(): void {
    this.expenseService
      .fetchExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }

  onAddNewExpense(newExpense: IExpense) {
    this.expenseService
      .createExpense(newExpense)
      .subscribe(
        (createdExpense: IExpense) =>
          (this.expenses = [createdExpense, ...this.expenses])
      );
    this.addExpenseToggle = false;
  }

  onDeleteExpense(expenseId: string) {
    this.expenseService.deleteExpense(expenseId).subscribe(() => {
      const position = this.expenses.findIndex(
        (expense) => expense.id === expenseId
      );
      this.expenses.splice(position, 1);
    });
  }
}
