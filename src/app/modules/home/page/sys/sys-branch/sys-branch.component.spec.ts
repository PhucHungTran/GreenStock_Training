import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysBranchComponent } from './sys-branch.component';

describe('SysBranchComponent', () => {
  let component: SysBranchComponent;
  let fixture: ComponentFixture<SysBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
