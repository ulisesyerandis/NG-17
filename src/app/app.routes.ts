import { Routes } from '@angular/router';

export const routes: Routes = 
[
    
     {
        
        path: 'dashboard',
        loadComponent: ()=> import( './dashboard/dashboard.component' ),
        children:
        [
            
            {
                path:'main-view',
                title:'Welcome to the University',
                loadComponent: () => import('./dashboard/pages/main-view/main-view.component')
            },
            // {
            //     path:'change-detection',
            //     title:'Change Detection',
            //     loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            // },
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
                loadComponent: () => import('./dashboard/pages/student/student.component')
            },
            {
                path:'student-list',
                title:'Student List',
                loadComponent: () => import('./dashboard/pages/student-list/student-list.component'),
            },
            {
                path:'find-student',
                title:'Find Student',
                loadComponent: () => import('./dashboard/pages/find-student/find-student.component')
            },
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
            {        
                path: 'form',
                title:'form',
                loadComponent: ()=> import( './dashboard/pages/form/form.component' ),
             },
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
     {        
        path: 'form',
        loadComponent: ()=> import( './dashboard/pages/form/form.component' ),
     }
   
];
