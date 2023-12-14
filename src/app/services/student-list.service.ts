import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentListService 
{
  private http = inject(HttpClient);

  constructor() 
  { }

  public getAllStudent()
  {
    const student = this.http.get('http://localhost:8000/student');
    return student;
  }
  
  // public getStudent(id: number)
  // {
  //   return this.http.get('http://localhost:8000/student');
  // }
}
