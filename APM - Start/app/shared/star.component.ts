import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'ml-star',
	templateUrl:'app/shared/star.component.html',
	styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
	@Input() rating: number = 5;
	@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
	starWidth: number;
	
	ngOnChanges() : void{
		this.starWidth = this.rating*86/5;
	}
	OnClickRating() : void{
		this.ratingClicked.emit(this.rating + " clicked");
	}
}