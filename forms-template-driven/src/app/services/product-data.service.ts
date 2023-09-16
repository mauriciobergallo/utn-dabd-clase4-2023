import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
    private listProducts: IProduct[] = [
        {
            name: 'Samsung S34',
            description: 'Telefono de Samsung',
            price: 1200
        },
        {
            name: 'iPhone 15',
            description: 'Telefono de Apple',
            price: 1100
        },
    ];

    add(product: IProduct) {
        this.listProducts.push(product);
    }

    list(): IProduct[] {
        return this.listProducts;
    }
}