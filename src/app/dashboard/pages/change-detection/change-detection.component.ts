import { CommonModule } from '@angular/common';
import {  Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    selector: 'app-change-detection',
    standalone: true,
    imports: [CommonModule, TitleComponent,  ],
    templateUrl: './change-detection.component.html',
    styles: ``
})
export default class ChangeDetectionComponent 
{
 public frameworkAsSignal = signal
 ({
    name:'Angular',
    releaseDate: 2023,
 })   
 public frameworkAsProperty = {
    name:'Angular',
    releaseDate:2023,
 };
}
