import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubbleSingleImageComponent } from './hubble-single-image.component';

describe('HubbleSingleImageComponent', () => {
  let component: HubbleSingleImageComponent;
  let fixture: ComponentFixture<HubbleSingleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubbleSingleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubbleSingleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
