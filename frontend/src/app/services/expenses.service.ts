import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  // private baseURL = 'http://localhost:3000/expenses';
  private baseURL =
    'https://sk-ng-jul-25-default-rtdb.firebaseio.com/expenses.json';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  fetchExpenses(): Observable<IExpense[]> {
    return this.httpClient.get<IExpense[]>(this.baseURL);
  }

  createExpense(newExpense: IExpense): Observable<IExpense> {
    return this.httpClient.post<IExpense>(this.baseURL, newExpense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteExpense(expenseId: string) {
    return this.httpClient.delete(`${this.baseURL}/${expenseId}`);
  }
}
