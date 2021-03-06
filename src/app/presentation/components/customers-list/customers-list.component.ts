import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { EventBusService, EmitEvent, Events } from '../../../core/event-bus.service';
import { Customer } from '../../../domain/customer.interface';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: [ './customers-list.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListComponent {
  @Input() customers: Customer[];
  @Output() customerSelected = new EventEmitter<Customer>();
  logMessages: string[] = [];

  constructor(private eventbus: EventBusService) { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['customers']) {
      this.logMessages.push('ngOnChanges Fired: Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    // envia para o pai via output
    this.customerSelected.emit(cust);
    // Envie o cliente para qualquer ouvinte do eventbus que esteja escutando o evento CustomerSelected
    this.eventbus.emit(new EmitEvent(Events.CustomerSelected, cust));
    
  }

}
