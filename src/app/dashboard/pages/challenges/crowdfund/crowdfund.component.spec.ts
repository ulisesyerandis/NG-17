import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundComponent } from './crowdfund.component';

describe('CrowdfundComponent', () => {
  let component: CrowdfundComponent;
  let fixture: ComponentFixture<CrowdfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrowdfundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrowdfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
