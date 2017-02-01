import {PipeTransform, Pipe} from '@angular/core';
import {IProduct} from './product-interface';

@Pipe({
	name:'productFilter'
})
export class ProductPipe implements PipeTransform{
	transform(value: IProduct[], filterBy:string) : IProduct[]{

		return value.filter(function(item){
			if(item.productName.toLowerCase().includes(filterBy.toLowerCase())){
				return value;
			}
		});
	}
}