import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService 
{
  private http = inject(HttpClient);
  
  constructor() 
  { 
    console.log('cargando');
    // console.log(this.getAllStudent().forEach.length);
    
  }

  public getAllStudent()
  {
    console.log(this.http.get('http://localhost:8000/student'))
    return this.http.get('http://localhost:8000/student');
  }
  
  // public getStudent(id: number)
  // {
  //   return this.http.get('http://localhost:8000/student');
  // }
}
