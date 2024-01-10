import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentListService } from '../../../services/student-list.service';
import { studentModel } from '../../../models/studentModel';

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

  @Input()formName: string = 'sin nombre';
  @Input()studentToUpdate: any;
  @Input()studentToSearch!: studentModel;
  @Output()editable = new EventEmitter<boolean>();

  oldStudent: any;
  newStudent: any;
  studentUpdated: any;
  studentName: string = 'juan';
  
  ngOnInit(): void
  {
     if(this.formName === 'Add Student')
     {
      this.title = this.formName ;
      this.buttonTitle = 'Add';
     }
     else if(this.formName === 'Update')
     {
      this.title = this.formName;
      this.buttonTitle = 'Update';
      this.form.value.name = this.studentToUpdate.name;
      this.oldStudent = this.studentToUpdate;
      console.log('old student in form.value = ' + this.form.value.name);      
      console.log('old student in oldStudent var = ' + this.oldStudent.name); 
     }
     else if (this.formName === 'Search')
     {
      this.title = this.formName;
      this.buttonTitle = 'Accept';
      this.studentName = this.studentToSearch.name;
      console.log( this.studentName)
      console.log('klvgnsgva');     
     }
  }

  // async someFunction() {
  //   await this.waitForStudentName();
  //   console.log(this.studentToSearch.name) 
  // }
  
  // waitForStudentName(): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     const interval = setInterval(() => {
  //       if (this.studentToSearch) {
  //         clearInterval(interval);
  //         resolve();
  //       }
  //     }, 100);
  //   });
  // }

  sendForm()
  {
    console.log('help')
    if(this.formName === 'Add Student')
    {
      this.studentListService.createStudent(this.form.value).subscribe({
      next: (response: any) => {
        console.log("student " + this.form.get('name')?.value + " created successfuly")
      },
      error: (error: any) => { }
    });
    }
    else if(this.formName === 'Update')
    {
      this.newStudent = this.form.value;
      console.log('id of old student= ' + this.oldStudent.id);
      console.log('new student ' + this.newStudent.name);
      this.studentListService.updateStudent(this.oldStudent.id, this.newStudent)
      .subscribe({
        next: (response: any) =>{
          this.studentUpdated = response;
          console.log("student " + this.studentUpdated.name + " updated successfuly")
        },
        error:(error: any) =>{
        },
      });
    }
    
    this.editable.emit(false);
    return this.form.value;
  }

  back() 
    {
      console.log('back 1')
      this.editable.emit(false);
      console.log('back')
    }
}
