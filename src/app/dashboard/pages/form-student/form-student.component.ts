import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentListService } from '../../../services/student-list.service';

@Component({
  selector: 'app-form-student',
  standalone: true,
  imports: 
  [
    RouterModule, CommonModule, ReactiveFormsModule
  ],
  templateUrl: './form-student.component.html',
  styleUrl: './form-student.component.css'
})
export class FormStudentComponent implements OnInit 
{
  public studentListService = inject(StudentListService);
  form = new FormGroup
  ({
    'id': new FormControl(''),
    'name': new FormControl('', Validators.required),
  });
  title: string = 'Add student';
  buttonTitle!: string;

  @Input()formInfo: string = 'sin nombre';
  @Output()editable = new EventEmitter<boolean>();
  
  ngOnInit(): void
  {
     if(this.formInfo === 'Add Student')
     {
      this.title = this.formInfo ;
      this.buttonTitle = 'Add';
     }
     else
     {
      this.title = this.formInfo;
      this.buttonTitle = 'Update';
     }
  }

  sendForm(routeToGo: string)
  {
    if(this.formInfo === 'Add Student')
    {
      this.studentListService.createStudent(this.form.value).subscribe({
      next: (response: any) => {
        console.log("student " + this.form.get('name')?.value + " created successfuly")
      },
      error: (error: any) => { }
    });
    }
    else
    {
      // this.studentListService.updateStudent()
    }
    
    this.editable.emit(false);
    return this.form.value;
  }
}
