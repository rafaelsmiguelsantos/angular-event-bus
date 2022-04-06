import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../../domain/customer.interface';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent {

  @Input() customer: Customer;

}
