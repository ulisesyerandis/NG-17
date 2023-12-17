import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import DashboardComponent from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent 
{
    // configuration to the sidemenu,
    //  to (barrer todas las rutas) navigate or acces to all routes from the sidemenu
    //                          first way   FROM A VARIABLE
    public menuItems = routes
    .map( routes => routes.children ?? [])
    .flat()
    .filter(route => route && route.path )
    // .filter(routes => routes && !routes.path?.includes(':'))

  constructor ()
  { 
    // configuration to the sidemenu,
    //  to (barrer todas las rutas) navigate or acces to all routes from the sidemenu
    //                    secund way    FROM  THE CONSTRUCTOR
    // const dashboardRoutes = routes
    // .map( routes => routes.children ?? [])
    // .flat()
    // .filter(route => route && route.path )
    // .filter(routes => routes && !routes.path?.includes(':'))

    console.log(this.menuItems);
  }
}
