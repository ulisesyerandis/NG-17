import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { studentModel } from '../models/studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentListService 
{
  private http = inject(HttpClient);
  student = new studentModel(0, '');
  response: any;
  
  constructor() 
  { }

  public getAllStudent()
  {
    return this.http.get('http://localhost:8000/student');
  }

  public getStudent(id: number)
  {
    // --console.log(id)
    return this.http.get('http://localhost:8000/student/'+id);
  }

  public getStudentByName(name: string)
  {
    console.log(name)
    return this.http.get('http://localhost:8000/student/'+name);
  }

  public createStudent(student: any)
  {
    return this.http.post('http://localhost:8000/student', student);
  }

  public updateStudent(id: number, student: any)
  {
    return this.http.put('http://localhost:8000/student/'+id, student);
  }

  public deleteStudent(id: number)
  {
    return this.http.delete('http://localhost:8000/student/'+id);
  }
  
}