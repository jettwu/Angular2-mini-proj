import { Component } from '@angular/core';

@Component({
	selector:'pm-app',
	template:
	`
    	<div class='navbar navbar-default'>
    		<ul style="list-style-type: none;">
    			<li style="float:left">
    				<a [routerLink]="['/welcome']">welcome</a><span>|</span>
    			</li>
    			<li style="float:left">
    				<a [routerLink]="['/products']">Products</a>
    			</li>
    		</ul>
    	</div>
        <div>
            <h1>{{pageTitle}}</h1> <br />
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent{

	pageTitle : string = 'Marlabs Training - Angular 2 Project';
	
}
