import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dahsboard-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dahsboard-page.component.html',
  styleUrl: './dahsboard-page.component.css'
})
export class DahsboardPageComponent {

}
