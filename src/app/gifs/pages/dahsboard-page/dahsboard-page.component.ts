import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-dahsboard-page',
  imports: [RouterOutlet, SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './dahsboard-page.component.html',
  styleUrl: './dahsboard-page.component.css'
})
export class DahsboardPageComponent {

}
