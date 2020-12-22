import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanoramaEquirectangularComponent } from './panorama-equirectangular.component';

describe('PanoramaEquirectangularComponent', () => {
  let component: PanoramaEquirectangularComponent;
  let fixture: ComponentFixture<PanoramaEquirectangularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaEquirectangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaEquirectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
