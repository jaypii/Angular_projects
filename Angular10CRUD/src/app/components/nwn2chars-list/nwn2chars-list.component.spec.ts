import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nwn2charsListComponent } from './nwn2chars-list.component';

describe('Nwn2charsListComponent', () => {
  let component: Nwn2charsListComponent;
  let fixture: ComponentFixture<Nwn2charsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nwn2charsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nwn2charsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
