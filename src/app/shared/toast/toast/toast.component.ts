import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  providers:[ToastComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent 
{
  @Output()deleted = new EventEmitter<boolean>();

  showToast(message: string) {
  console.log(message);
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
  if(message === 'Student deleted successfully')
  {
    toast.className = 'bg-red-600 text-white text-sm rounded-md p-4';
    toast.textContent = message;
    
    toastContainer?.appendChild(toast);  
  }else if(message === 'accept')
  {
    toast.remove;
  }
    
    
      
  }

  accept()
  {
    console.log('deleted')
    this.deleted.emit(false);
  }
}
