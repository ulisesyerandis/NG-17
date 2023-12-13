import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [CommonModule,],
    templateUrl: './usersList.component.html',
    styles: ``
})
export default class UsersListComponent { }
