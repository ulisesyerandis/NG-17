import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import FormComponent from '../form/form.component';
import StudentListComponent from '../student-list/student-list.component';

type Grades = 'A'|'B'|'F';

@Component({
    selector: 'app-main-view',
    standalone: true,
    imports: [CommonModule, TitleComponent, FormComponent, StudentListComponent],
    templateUrl: './main-view.component.html',
    styles: ``
})
export default class ControlFlowComponent 
{
    public showContent = signal(false);
    public grades = signal<Grades>('A');
    public userList = signal(['Yerandis','Yoyo','Isabel','Jeidy','Dayanis']);

    editable: boolean = false;
    public constructor()
    {}

    public toggleContent() 
    {
        this.showContent.update(value => !value);  
    }
}
