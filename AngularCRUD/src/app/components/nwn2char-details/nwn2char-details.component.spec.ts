import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nwn2charDetailsComponent } from './nwn2char-details.component';

describe('Nwn2charsDetailsComponent', () => {
  let component: Nwn2charDetailsComponent;
  let fixture: ComponentFixture<Nwn2charDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nwn2charDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nwn2charDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
