import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TopMenuComponent } from "./header/top-menu/top-menu.component";
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopMenuComponent, MainMenuComponent, ContainerComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-App';
}
