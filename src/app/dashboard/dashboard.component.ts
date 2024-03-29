import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';    //  alias created in tsconfig.json(@shared)

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ RouterModule, SidemenuComponent ],
    templateUrl: './dashboard.component.html',
    styles: ``
})
export default class DashboardComponent { }
