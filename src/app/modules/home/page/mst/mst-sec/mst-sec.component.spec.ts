import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstSecComponent } from './mst-sec.component';

describe('MstSecComponent', () => {
  let component: MstSecComponent;
  let fixture: ComponentFixture<MstSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
