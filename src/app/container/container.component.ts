import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";
@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, FormsModule, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[]=['Ravi','tej','kv','g3']
  // addToCart: number = 0 ;
  // product = {
  //   name: 'iPhone',
  //   Price: 999,
  //   color: 'grey',
  //   dicount: 10,
  //   stock: 5,
  //   imageUrl: '/assets/images/iphone.png'
  // }

  // getDiscountedPrice(){
  //   return this.product.Price-(this.product.Price*0.01*this.product.dicount)  
  // }

  // incrementCartValue(){
  //   if(this.addToCart<this.product.stock){
  //      this.addToCart++;
  //   }
  // }
  // decrementCartValue(){
  //   if(this.addToCart>0){
  //     this.addToCart--;
  //   }
  // }

  searchText: string ='';

  setSearchText(value:string){
    this.searchText = value;
  }
}
