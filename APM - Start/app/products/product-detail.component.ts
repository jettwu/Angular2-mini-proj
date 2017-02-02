import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	template:
	`
		<div>
			<h1>Product Detail Page</h1>
			<p>Displaying ID value: {{productId}}</p>
			<p>Displaying Username value : {{username}} </p>
		</div>
	`
})
export class ProductDetailComponent{
	productId : number;
	username : string;
	constructor(private _activatedRoute : ActivatedRoute){
		this.productId = _activatedRoute.snapshot.params['id'];
		this.username = _activatedRoute.snapshot.params['username'];
	}
}