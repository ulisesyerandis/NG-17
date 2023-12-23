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
    return this.http.get('http://localhost:8000/student');
  }
  
}