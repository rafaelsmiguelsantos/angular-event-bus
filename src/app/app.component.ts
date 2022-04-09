import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Customer } from './domain/customer.interface';
import { EventBusService, Events } from './core/event-bus.service';
import { DataService } from './core/data.service';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  eventbusSub: Subscription;
  customersChangedSub: Subscription;

  constructor(private eventbus: EventBusService, private dataService: DataService) { }

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    const chang = this.eventbusSub = this.eventbus.on(Events.CustomerSelected, cust => (this.customer = cust));

    console.log(`Mudanca Detectada ${chang}`);
    
    //Example of using BehaviorSubject to be notified when a service changes
  }

  ngOnDestroy() {
    // AutoUnsubscribe decorator above makes these calls unnecessary
    // this.eventbusSub.unsubscribe();
    // this.customersChangedSub.unsubscribe();
  }
}
