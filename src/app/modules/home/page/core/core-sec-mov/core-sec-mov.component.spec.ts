import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSecMovComponent } from './core-sec-mov.component';

describe('CoreSecMovComponent', () => {
  let component: CoreSecMovComponent;
  let fixture: ComponentFixture<CoreSecMovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreSecMovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSecMovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
