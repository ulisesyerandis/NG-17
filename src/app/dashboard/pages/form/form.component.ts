import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export default class FormComponent 
{
  title = "Form";
  nombre = '';
  // name!: FormControl<any>;
  
  form = new FormGroup
  ({
    name: new FormControl(),
  });


  public save()
  {
    // this.nombre = this.form.get('name')?.value
    // 
    this.nombre = this.form.get('name')?.value
    console.log(this.nombre+" 1234")
  }

}