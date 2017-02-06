import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { IProduct } from './product-interface';
import { ProductService } from './product-service';

@Component({
	// template:
	// `
	// 	<div>
	// 		<h1>Product Detail Page</h1>
	// 		<p>Displaying ID value: {{productId}}</p>
	// 	</div>
	// `

    templateUrl: 'app/products/product-detail.component.html',
    providers: [ProductService]
})
export class ProductDetailComponent implements OnInit{
	productId : number;
    product: IProduct;

    private sub: Subscription;

    products:IProduct[];
    errorMessage:string;


	constructor(private _activatedRoute : ActivatedRoute, 
                private _productService : ProductService, 
                private _router: Router){
		// this.productId = _activatedRoute.snapshot.params['id'];
  //       // this.product = _productService.getSingleData(this.productId);


  //       this._productService.getSingleData(this.productId)
  //       .subscribe(product => this.product = product);

        // console.log(this.product);
	}

         ngOnInit(): void {
            this.sub = this._activatedRoute.params.subscribe(
                params => {
                    let id = +params['id'];
                    this.getProduct(id);
            });
        }


        getProduct(id: number) {
            this._productService.getSingleData(id).subscribe(
                product => this.product = product);
        }


    onBack(): void {
        this._router.navigate(['/products']);
    }
}