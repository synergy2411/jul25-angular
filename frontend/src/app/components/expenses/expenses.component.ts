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

  constructor(private expenseService: ExpensesService) {}

  ngOnInit(): void {
    this.expenseService
      .fetchExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }
}
