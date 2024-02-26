import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloodBanksComponent } from './admin-blood-banks.component';

describe('AdminBloodBanksComponent', () => {
  let component: AdminBloodBanksComponent;
  let fixture: ComponentFixture<AdminBloodBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBloodBanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBloodBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
