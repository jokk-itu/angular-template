import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconDefinitionComponent } from './svg-icon-definition.component';

describe('SvgIconDefinitionComponent', () => {
  let component: SvgIconDefinitionComponent;
  let fixture: ComponentFixture<SvgIconDefinitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgIconDefinitionComponent]
    });
    fixture = TestBed.createComponent(SvgIconDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
