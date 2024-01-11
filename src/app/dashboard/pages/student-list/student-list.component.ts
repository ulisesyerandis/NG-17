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
import { MatPaginator, MatPaginatorModule, PageEvent,MatPaginatorIntl } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ControlFlowComponent from '../main-view/main-view.component';
import DashboardComponent from '../../dashboard.component';
import { FormStudentComponent } from '../form-student/form-student.component';
import { studentModel } from '../../../models/studentModel';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: 
  [
    CommonModule, TitleComponent, RouterModule,
    MatCardModule, MatButtonModule, MatTableModule,
    MatPaginatorModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,FormComponent, ControlFlowComponent,
    DashboardComponent, FormStudentComponent,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export default class StudentListComponent implements OnInit
{
  public formTitle = inject(FormComponent)
  public studentListService = inject(StudentListService)

  // search = new FormControl('');
  searchForm = new FormGroup
  ({
     'nameInput': new FormControl(),
  })

  studentList: any;
  studentFindIt: any;
  studentDeleted: any;
  studentToUpdate: any; //old student
  studentUpdated: any;  //new student
  studentToSearch: any;
  studentName!: string;

  dataSource: any;
  displayedColumns: string[] = [];

  // public menuItems = routes
  // .map( routes => routes )
  // .flat()
  // .filter(route => route && route.path )
  // .filter(routes => routes && routes.path?.includes('form'))

  // page_size: number = 3;
  // page_number: number = 1;
  // pageSizeOptions: number [] = [5, 10, 10];
  // paginator!: MatPaginator;
  // paginatorIntl!: MatPaginatorIntl;

 editable: boolean = false;
 titleForm!: string ;
 defaultValue = 0;
// information: JSON = { }

public constructor
(
  private formRoutes: Router,
)
{}
  ngOnInit(): void 
  {
    this.FillStudentData();
    this.dataSource = this.studentList;
    this.displayedColumns = ['No','id','name','button'];

  // this.paginatorIntl = new MatPaginatorIntl();
  // this.paginatorIntl.itemsPerPageLabel = 'Elementos por página';
  
  }

  // handleSearch(value:any)
  // {
  //   console.log("lllllllllllll")
  //   console.log(value)
  // }

//   handlePage(e: PageEvent)
//   {
//     this.page_size = e.pageSize;
//     this.page_number = e.pageIndex + 1;
// console.log("page number "+this.page_number)
// console.log("size "+ this.page_size)
//   }

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
  // --console.log(this.studentList + ' cant');
}

//      CRUD -> get()     
//      Luego de crear el ormulario crear la vista para mostrar el estudiante 
public findStudent(id: number)
{
  this.studentListService.getStudent(id).subscribe({
    next: (response: any) =>{
      this.studentFindIt = response;
      //-- console.log("student find it")
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
        // --console.log("student " + this.studentDeleted.name + " deleted successfuly")
        this.ngOnChanges(this.studentList);
        location.reload();
      },
      error:(error: any) =>{
      },
    }); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentList']) {
      this.dataSource = this.studentList;
    }
  }

  addButton() 
   { 
    this.titleForm = 'Add Student';
    // --console.log('button add clicked');
    // console.log(this.menuItems.at(0)?.children?.at(4)?.path);
  //   console.log(this.menuItems);
  //   console.log("titulo = " + buttontitle);
  //   for (var i = 0; i < this.menuItems.length; i++) 
  //   {
  //     if (this.menuItems[i].path === 'form')
  //     {
  //       if(buttontitle === 'add')
  //       {
  //         this.formTitle.title = 'Add student';
  //       }else if(buttontitle === 'update')
  //       {
  //         this.formTitle.title = 'Update student';
  //       }
  //       console.log("este es el titulo del formulario ->" + this.formTitle.title)
  //       this.formRoutes.navigate([this.menuItems[i].path]);
  //     }
  //     console.log("2 - este es el titulo del formulario ->" + this.formTitle.title)
  //   }
  // //  console.log(this.formRoutes.navigate(['./dashboard/pages/form/form.component']));
  // }
  // --console.log('titulo = '+ this.titleForm);
  // --console.log('student = '+ this.studentList)
//  this.information = {}
//  JSON.parse(this.titleForm + '.' + this.dataSource.at[this.dataSource.length-1] );
  this.editable = true; 
  }

  updateButton(student: any)
  {
    this.titleForm = 'Update';
    this.editable = true;
    // --console.log('button update clicked');
    this.studentToUpdate = student;
    // --console.log('student selected to update = ' + this.studentToUpdate.name);
    // --console.log('student selected to update = ' + student.name);

  // console.log('student = '+ this.studentUpdated.name + 'updated successfully')
  }

  searchStudentByName( ) 
  {
    this.titleForm = 'Search' 
    // --console.log(this.titleForm)
    // this.studentToSearchName = this.searchForm.value
    // --console.log('--->' + this.searchForm.value.nameInput)
    this.studentName= this.searchForm.value.nameInput;
    // --console.log('---> student name ' + this.studentName)
    this.studentListService.getStudentByName(this.studentName)
    .subscribe({
      next: (response: any) => {
        this.studentToSearch = response;
        // --console.log('student serched => ' + this.studentToSearch.name)  
      },
      error: (error: any) => {}
    })
    // this.editable = true;
  }

  searchStudentById()
  {
    this.titleForm = 'Search' 
    // --console.log(this.titleForm)
    // this.studentToSearchName = this.searchForm.value
    // --console.log('--->' + this.searchForm.value.nameInput)
    
      this.studentListService.getStudent(this.searchForm.value.nameInput)
    .subscribe({
      next: (response: any) =>{
        this.studentToSearch = response;
        // --console.log('student serched => ' + this.studentToSearch)  
        // --console.log('student serched id => ' + this.studentToSearch.id) 
        // --console.log('student serched name => ' + this.studentToSearch.name)      
        if(this.studentToSearch === 'Student not found')
  {
    // --console.log('student not found'); 
    this.studentToSearch = new studentModel(0, 'student not found');
  }
      },
      error: (error: any) =>{}
  })
  this.editable = true;
    }
}
