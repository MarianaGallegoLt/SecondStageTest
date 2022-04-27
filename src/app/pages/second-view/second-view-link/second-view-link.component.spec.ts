import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondViewLinkComponent } from './second-view-link.component';

describe('SecondViewLinkComponent', () => {
  let component: SecondViewLinkComponent;
  let fixture: ComponentFixture<SecondViewLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondViewLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondViewLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
