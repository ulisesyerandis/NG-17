import { Routes } from '@angular/router';
import FormComponent from './dashboard/pages/form/form.component';
import StudentComponent from './dashboard/pages/student/student.component';
import StudentListComponent from './dashboard/pages/student-list/student-list.component';
import ControlFlowComponent from './dashboard/pages/main-view/main-view.component';
import DashboardComponent from './dashboard/dashboard.component';
import findStudentComponent from './dashboard/pages/find-student/find-student.component';
import { Component } from '@angular/core';
import { FormStudentComponent } from './dashboard/pages/form-student/form-student.component';

export const routes: Routes = 
[
    
     {
        
        path: 'dashboard',
        // loadComponent: ()=> import( './dashboard/dashboard.component' ),
        component: DashboardComponent,
        children:
        [
            
            {
                path:'main-view',
                title:'Welcome to the University',
                // loadComponent: () => import('./dashboard/pages/main-view/main-view.component'),
                component:ControlFlowComponent
            },
            {
                path:'change-detection',
                title:'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            // {
            //     path:'defer-options',
            //     title:'Defer Options',
            //     loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            // },
            // {
            //     path:'defer-views',
            //     title:'Defer Views',
            //     loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
            // },
            {
                path:'student/:id',
                title:'Add Student',
                // loadComponent: () => import('./dashboard/pages/student/student.component'),
                component: StudentComponent
            },
            {
                path:'student-list',
                title:'Student List',
                // loadComponent: () => import('./dashboard/pages/student-list/student-list.component'),
                component: StudentListComponent
            },
            // {
            //     path:'find-student',
            //     title:'Find Student',
            //     // loadComponent: () => import('./dashboard/pages/find-student/find-student.component'),
            //     component: findStudentComponent
            // },
            // {
            //     path:'user-list',
            //     title:'User List',
            //     loadComponent: () => import('./dashboard/pages/usersList/usersList.component')
            // },
            // {
            //     path:'view-transition',
            //     title:'View Transition',
            //     loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
            // },
            // {        
            //     path: 'form',
            //     title:'Form',
            //     loadComponent: ()=> import( './dashboard/pages/form/form.component' ),
            //  },
            {
                path:'',
                redirectTo:'main-view',
                pathMatch:'full',
            }
        ]
     },
     {     
        //              .....   redireccionamiento en la ruta por defecto    
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
     },
    //  {        
    //     path: 'form',
    //     component: FormComponent,
    //     // loadComponent: ()=> import( './dashboard/pages/form/form.component' ),
    //  },
     {
        path: 'formStudent',
     component: FormStudentComponent,
     }
     
   
];
