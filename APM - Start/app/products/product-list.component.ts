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
	toggleImg() : void {
		this.showHideImg = !this.showHideImg;
	}

	filterVal : string = '';

	ngOnInit() : void{
		console.log('call OnInit()');
	}

	products : IProduct[] ;
	constructor(private _productService : ProductService){
		this.products = _productService.getData();
	}
	
	starRatingClicked(msg: string) : void{
		alert(msg);
	}
}

