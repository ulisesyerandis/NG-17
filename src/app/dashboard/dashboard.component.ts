import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ RouterModule ],
    templateUrl: './dashboard.component.html',
    styles: ``
})
export default class DashboardComponent { }
