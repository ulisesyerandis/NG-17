import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grades = 'A'|'B'|'F';

@Component({
    selector: 'app-control-flow',
    standalone: true,
    imports: 
    [
        CommonModule,
    ],
    templateUrl: './control-flow.component.html',
    styles: ``
})
export default class ControlFlowComponent 
{
    public showContent = signal(false);
    public grades = signal<Grades>('A');

    public constructor()
    {}

    public toggleContent() 
    {
        this.showContent.update(value => !value);  
    }
}
