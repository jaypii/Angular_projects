import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNwn2charComponent } from './add-nwn2char.component';

describe('AddNwn2charComponent', () => {
  let component: AddNwn2charComponent;
  let fixture: ComponentFixture<AddNwn2charComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNwn2charComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNwn2charComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
