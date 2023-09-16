import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggerService } from './services/logger.service';
import { IProduct } from './models/product';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'ftd-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit, OnDestroy {
  product: IProduct = {
    name: '',
    description: '',
    price: 0
  };
  localProductList: IProduct[] = [];

  // private _loggerService: LoggerService;
  constructor(private loggerService: LoggerService, 
    private productDataService: ProductDataService) {
    // this._loggerService = loggerService;
  }

  ngOnInit(): void {
    this.loggerService.log('Inicialización');
    this.localProductList = this.productDataService.list();
  }

  ngOnDestroy(): void {
    
  }
  
  onSubmitForm(newProductForm: NgForm) {
    if (newProductForm.valid) {
      this.loggerService.log('Formulario Válido')

      this.productDataService.add(newProductForm.value as IProduct);
      this.localProductList = this.productDataService.list();
      newProductForm.resetForm();
      // hago lo que tenga que hacer
    } else {
      this.loggerService.error('Formulario no valido');
    }
  }
}
