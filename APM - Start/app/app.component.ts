import { Component } from '@angular/core';

@Component({
	selector:'pm-app',
	template:
	`
    	<div class='navbar navbar-default'>
    		<ul>
    			<li>
    				<a [routerLink]="['/welcome']">welcome</a>
    			</li>
    			<li>
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
