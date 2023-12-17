import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentListService 
{
  private http = inject(HttpClient);
  student: any;
  
  constructor() 
  { 
    console.log('cargando');
    // console.log(this.getAllStudent().forEach.length);
    this.http.get('http://localhost:8000/student')
    .subscribe(res =>{
      this.student = res;
      console.log('studentList service')
    })
  }

  public getAllStudent()
  {
    // console.log(this.http.get('http://localhost:8000/student'))
    return this.http.get('http://localhost:8000/student');
  }
  
  // public getStudent(id: number)
  // {
  //   return this.http.get('http://localhost:8000/student');
  // }
}
