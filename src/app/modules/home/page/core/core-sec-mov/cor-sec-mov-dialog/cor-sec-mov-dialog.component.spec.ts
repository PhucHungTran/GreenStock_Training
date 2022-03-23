import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorSecMovDialogComponent } from './cor-sec-mov-dialog.component';

describe('CorSecMovDialogComponent', () => {
  let component: CorSecMovDialogComponent;
  let fixture: ComponentFixture<CorSecMovDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorSecMovDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorSecMovDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
