import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTemplateComponent } from './ip-template.component';

describe('IpTemplateComponent', () => {
  let component: IpTemplateComponent;
  let fixture: ComponentFixture<IpTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
