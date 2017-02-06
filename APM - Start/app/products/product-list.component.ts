import {Component, OnInit} from '@angular/core';
import {IProduct} from './product-interface';
import {ProductService} from './product-service';

@Component ({
	selector:'pm-products',
	templateUrl:'app/products/product-list.component.html',
	styles:['thead{color:#FF0000}','thead{background:#CCC}'],
	providers:[ProductService]

})

export class ProductComponent implements OnInit{
	pageTitle : string = 'Marlabs products';
	imageWidth : number = 40;
	showHideImg : boolean = false;
	errorMessage : string;
	filterVal : string = '';
	toggleImg() : void {
		this.showHideImg = !this.showHideImg;
	}

	ngOnInit() : void{
		console.log('call OnInit()');
	}

	products : IProduct[] ;
	constructor(private _productService : ProductService){
		// this.products = _productService.getData();

		// _productService.getData()
		// .then(product_response => this.products = product_response);

		 this._productService.getData()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
	}
	
	starRatingClicked(msg: string) : void{
		alert(msg);
	}
}

