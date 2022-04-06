import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { DataService } from '../core/data.service';
import { Customer } from '../domain/customer.interface';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent implements OnInit, OnDestroy {

  customers: Customer[] = [];
  customer: Customer;
  private subs = new SubSink();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subs.sink = this.dataService.getCustomers()
        .subscribe((custs: Customer[]) => this.customers = custs);
  }

  selected(cust: Customer) {
    this.customer = cust;
  }

  addCustomerPush() {
    this.dataService.addCustomer()
        .subscribe((custs: Customer[]) => this.customers = custs);
  }

  // addCustomerClone() {
  //   this.dataService.addCustomerClone()
  //       .subscribe((custs: Customer[]) => this.customers = custs);
  // }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
