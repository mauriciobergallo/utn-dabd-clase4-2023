import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IProduct {
  name: string,
  description: string,
  price: number
}

@Component({
  selector: 'ftd-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  product: IProduct = {
    name: 'iPhone',
    description: 'Un telefono',
    price: 1200
  }
  
  onButtonClicked(form: NgForm) {
    console.log('Data', form);
  }
}
