import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { StudentListService } from '../../../services/student-list.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, TitleComponent,],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export default class StudentListComponent 
{
  student: any;
  public studentListService = inject(StudentListService);
  public showContent = signal(false);
  // studentListService: any;
  
public constructor()
{}

public FillStudentData(): void {
  this.studentListService.getAllStudent().subscribe({
      next: (response: any) => {
          this.student = response;
          console.log("Hello world");
      },
      error: (error: any) => {
          console.log(error)
      },
  });
}

public toggleContent() 
    {
        this.showContent.update(value => !value);  
    }

}


