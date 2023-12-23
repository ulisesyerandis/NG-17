import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService 
{
  private http = inject(HttpClient);

  constructor() 
  { }

  public getStudent(id: number)
  {
    console.log(id)
    return this.http.get('http://localhost:8000/student/'+id);
  }

  public createStudent(student: any)
  {
    return this.http.post('http://localhost:8000/student', student);
  }

  public updateStudent(id: number, student: any)
  {
    return this.http.put('http://localhost:8000/student/${id}', student);
  }

  public deleteStudent(id: number)
  {
    return this.http.delete('http://localhost:8000/student/${id}');
  }
}
