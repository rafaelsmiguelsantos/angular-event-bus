import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationRoutingModule } from './communication-routing.module';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule  
  ],
  declarations: [CommunicationRoutingModule.components, CustomersListComponent, CustomerDetailsComponent ]
})
export class CommunicationModule { }
