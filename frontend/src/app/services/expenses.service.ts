import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private baseURL = 'http://localhost:3000/expenses';

  constructor(private httpClient: HttpClient) {}

  fetchExpenses(): Observable<IExpense[]> {
    return this.httpClient.get<IExpense[]>(this.baseURL);
  }
}
