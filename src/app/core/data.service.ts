import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { Customer } from '../domain/customer.interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      city: 'Phoenix',
      age: 42
    },
    {
      id: 2,
      name: 'Jane Doe',
      city: 'Seattle',
      age: 30
    },
    {
      id: 3,
      name: 'Michelle Thompson',
      city: 'Orlando',
      age: 22
    }
  ];

  immutableCustomers = List<Customer>();

  private customersSubject$ = new BehaviorSubject<Customer[]>(this.customers);
  customersChanged$ = this.customersSubject$.asObservable();

  constructor() { }

  getCustomers() : Observable<Customer[]> {
    // Use the following code if using immutable.js
    // return of(this.immutableCustomers.toJS());

    return of(this.customers);
  }

  addCustomer() : Observable<Customer[]> {
    let id = this.customers[this.customers.length - 1].id + 1;
    this.customers.push({
      id: id,
      name: 'New Customer ' + id,
      city: 'Somewhere',
      age: id * 5
    });
    this.customersSubject$.next(this.customers);
    return of(this.customers);
  }

  addCustomerImmutable(): Observable<Customer[]> {
    let id = this.immutableCustomers[this.immutableCustomers.size - 1].id + 1;
    this.immutableCustomers.push({
      id: id,
      name: 'New Customer ' + id,
      city: 'Somewhere',
      age: id * 5
    });
    this.customersSubject$.next(this.customers);
    return of(this.immutableCustomers.toArray())
  }

}
