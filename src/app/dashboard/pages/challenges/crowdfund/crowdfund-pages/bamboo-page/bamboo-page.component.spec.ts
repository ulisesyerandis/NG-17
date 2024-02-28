import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BambooPageComponent } from './bamboo-page.component';

describe('BambooPageComponent', () => {
  let component: BambooPageComponent;
  let fixture: ComponentFixture<BambooPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BambooPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BambooPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
