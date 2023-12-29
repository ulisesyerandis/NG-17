import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentListService } from '../../../services/student-list.service';
import { routes } from '../../../app.routes';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import StudentListComponent from '../student-list/student-list.component';
import { ButtonService } from '../../../services/button.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: 
  [
    CommonModule, TitleComponent, RouterModule, 
     ReactiveFormsModule, MatFormFieldModule, 
     MatInputModule, MatButtonModule,
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export default class FormComponent implements OnInit
{
  [x: string]: any;
  public studentListService = inject(StudentListService);

  title: string  ='';
  formTitle: string = '';
  
  form = new FormGroup
  ({
    'name': new FormControl('', Validators.required),
  });

  public menuItems = routes
    .map( routes => routes.children ?? [])
    .flat()

  public constructor
  (
    private route: Router,
    private buttonService: ButtonService  
  )
  {}

  ngOnInit() 
  {
    console.log('1');
    this.buttonService.buttonClicked$.subscribe((button: string) => {
      console.log("nombre del boton -> "+button);
      if (button === 'add') {
        this.formTitle = 'Add student';
      } else if (button === 'update') {
        this.formTitle = 'Update student';
      }
    });
    console.log("nuevo -> "+this.formTitle);
  }
  
  sendForm(routeToGo: string)
  {
    // console.log(this.form.value)
    this.studentListService.createStudent(this.form.value).subscribe({
      next: (response: any) => {
        console.log("student " + this.form.get('name')?.value + " created successfuly")
      },
      error: (error: any) => { }
    });
    this.goTo(routeToGo);
    return this.form.value;
  }

  goTo(routeToGo: string)
  {
    
    for(var i = 0; i < this.menuItems.length; i++)
    {
      if(this.menuItems[i].path === routeToGo)
      {
        console.log("regresamos a la ruta -> " + ['dashboard/'+ this.menuItems[i].path]);
    this.route.navigate(['dashboard/'+ this.menuItems[i].path]);
      }
    }
  }

}