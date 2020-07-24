import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNavComponent } from './container-nav.component';

describe('ContainerNavComponent', () => {
  let component: ContainerNavComponent;
  let fixture: ComponentFixture<ContainerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
