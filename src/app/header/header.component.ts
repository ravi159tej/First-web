import { Component } from '@angular/core';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SearchComponent } from "../container/search/search.component";

@Component({
  selector: 'header',
  standalone: true,
  imports: [TopMenuComponent, MainMenuComponent, MainMenuComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
