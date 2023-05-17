import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers$: any;
  error$: any;

  editCustomer(customer: any) {

  }

  deleteCustomer(customer: any) {

  }
}
