import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string='';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    
  }

  updateSearchText(inputEL:HTMLInputElement){
    this.searchText=inputEL.value;
    this.searchTextChanged.emit(this.searchText);     
  }


}


 