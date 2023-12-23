import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { StudentListService } from '../../../services/student-list.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import FormComponent from '../form/form.component';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule,],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export default class StudentListComponent implements OnInit
{
  public studentListService = inject(StudentListService)

  student: any;
  public showContent = signal(false)
  public items = routes.filter(route => route.path?.includes('form'))
  
public constructor()
{}
  ngOnInit(): void {
    this.FillStudentData();
  }

public FillStudentData(): void
{
  this.studentListService.getAllStudent().subscribe({
      next: (response: any) => {
          this.student = response;
          console.log("Hello world");
      },
      error: (error: any) => {   
          // console.log(error)
      },
  });
  console.log(this.student + ' cant');
  this.showContent.update(value => !value);
}

public openAddStudentWindow() 
{
  console.log(this.items.toString())
   window.open(this.items.toString(), "Add Student", "width=500,height=300");
}
}


