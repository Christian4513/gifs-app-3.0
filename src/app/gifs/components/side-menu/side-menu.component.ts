import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';
import { CommonModule } from '@angular/common';

/**
 * Componente que representa el menú lateral de la aplicación.
 *
 * Este menú incluye una cabecera y un conjunto de opciones que permiten al usuario
 * navegar a través de diferentes secciones de la aplicación.
 */
@Component({
  selector: 'gif-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {


}

