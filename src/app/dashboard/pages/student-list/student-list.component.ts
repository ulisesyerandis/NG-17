import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild, inject, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { StudentListService } from '../../../services/student-list.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import FormComponent from '../form/form.component';
import { routes } from '../../../app.routes';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';
import { StudentService } from '../../../services/student.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: 
  [
    CommonModule, TitleComponent, RouterModule,
    MatCardModule, MatButtonModule, MatTableModule,
    MatPaginatorModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,FormComponent
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export default class StudentListComponent implements OnInit
{
  public formTitle = inject(FormComponent)
  public studentListService = inject(StudentListService)

  studentList: any;
  studentFindIt: any;
  studentDeleted: any;

  dataSource: any;
  displayedColumns: string[] = [];
  count:number = 0;

  public menuItems = routes
  .map( routes => routes )
  .flat()
  .filter(route => route && route.path )
  // .filter(routes => routes && routes.path?.includes('form'))

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions: number [] = [5, 10, 10];

 search = new FormControl('');
 @Output('search') searchEmitter = new EventEmitter<any>();

public constructor(private formRoutes: Router,)
{}
  ngOnInit(): void 
  {
    this.FillStudentData();
    this.dataSource = this.studentList;
    this.displayedColumns = ['id','name','button'];

    // for(const item of this.menuItems)
    // {
    //    console.log("rutas " + item.path)
    // }
   
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
    console.log("22222 " + this.search.get('search')?.value)
  }

  handleSearch(value:any)
  {
    console.log("lllllllllllll")
    console.log(value)
  }

  handlePage(e: PageEvent)
  {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
console.log("page number "+this.page_number)
console.log("size "+ this.page_size)
  }

public FillStudentData(): void
{
  this.studentListService.getAllStudent().subscribe({
      next: (response: any) => {
          this.studentList = response;
          console.log("Hello world");
          this.dataSource = this.studentList;
      },
      error: (error: any) => {   
          // console.log(error)
      },
  });
  console.log(this.studentList + ' cant');
}

//      CRUD -> get()     
//      Luego de crear el ormulario crear la vista para mostrar el estudiante 
public findStudent(id: number)
{
  this.studentListService.getStudent(id).subscribe({
    next: (response: any) =>{
      this.studentFindIt = response;
      console.log("student find it")
    },
    error:(error: any) =>{

    },
  });
}

  public deleteStudent(id: number)
  {
    this.studentListService.deleteStudent(id).subscribe({
      next: (response: any) =>{
        this.studentDeleted = response;
        console.log("student " + this.studentDeleted.name + " deleted successfuly")
        this.ngOnChanges(this.studentList);
        location.reload();
      },
      error:(error: any) =>{

      },
    }); 
  }

  // public updateStudent(student: any) 
  // {
  //  (student, id) {
  //     this.http.put(`/api/students/${id}`, student)
  //       .subscribe(
  //         (response) => {
  //           this.students = response.json();
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //   }
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentList']) {
      this.dataSource = this.studentList;
    }
  }

   goToForm(title: string) 
   { 
    // console.log(this.menuItems.at(0)?.children?.at(4)?.path);
    console.log(this.menuItems);
    console.log("titulo = " + title);
    for (var i = 0; i < this.menuItems.length; i++) 
    {
      if (this.menuItems[i].path === 'form')
      {
        console.log("este es el titulo del formulario " + this.formTitle.title)
        console.log('-----  '+ this.menuItems[i].path);
        this.formRoutes.navigate([this.menuItems[i].path]);
      }
    }
   
  //  console.log(this.formRoutes.navigate(['./dashboard/pages/form/form.component']));
  }
}