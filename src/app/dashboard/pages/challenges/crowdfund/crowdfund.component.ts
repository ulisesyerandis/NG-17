import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './crowdfund-pages/header/header.component';
import { BambooPageComponent } from './crowdfund-pages/bamboo-page/bamboo-page.component';

@Component({
  selector: 'app-crowdfund',
  standalone: true,
  imports: 
  [
    CommonModule,
    HeaderComponent, BambooPageComponent
  ],
  templateUrl: './crowdfund.component.html',
  styleUrl: './crowdfund.component.css'
})
export class CrowdfundComponent 
{

}
