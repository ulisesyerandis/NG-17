import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentListService } from '../../../services/student-list.service';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: 
  [
    CommonModule, TitleComponent, RouterModule, 
     ReactiveFormsModule
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export default class FormComponent implements OnInit
{
  ngOnInit(): void
   { }
  public studentListService = inject(StudentListService);

  title = "Form";
  nombre = '';
  // name!: FormControl<any>;
  
  form = new FormGroup
  ({
    'name': new FormControl('', Validators.required),
  });

  enviar()
  {
    // console.log(this.form.value)
    this.studentListService.createStudent(this.form.value).subscribe({
      next: (response: any) => {
        console.log("student " + this.form.get('name')?.value + " created successfuly")
      },
      error: (error: any) => { }
    });

    return this.form.value;
  }
}