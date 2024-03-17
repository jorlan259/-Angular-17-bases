import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Customer } from '@interfaces/request.response';
import { UserService } from '@services/user.service';
import { CustomerMapper } from '../../../core/models/Customer';
import { map } from 'rxjs';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [CommonModule, TitleComponent],
    template: `
    <shared-title title="Http Client"/>
    <div class="flex flex-col gap-2 ">
        @for (customer of custommers(); track customer.id) {
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" (click)="customerSelected.set(customer)">mostrar datos  de <p>{{customer.fullName}}</p></button>
        }
    </div>
  @if (customerSelected()) {
   <div class="bg-slate-300 p-5">
    {{customerSelected()?.address}}
   </div>
  }

    `
})
export default class HttpClientComponent {
    private userSerice = inject(UserService);
    public custommers = toSignal<Customer[] | undefined>(
        this.userSerice.getAllCustomers().pipe(
            map((customers) => customers.map((customer) => new CustomerMapper(customer).customer))
        )
    )
    public customerSelected = signal<Customer | undefined>(undefined)
    constructor() {

    }
}