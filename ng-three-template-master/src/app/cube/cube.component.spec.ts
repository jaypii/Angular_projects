import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CubeComponent } from './cube.component';

describe('CubeComponent', () => {
  let component: CubeComponent;
  let fixture: ComponentFixture<CubeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
