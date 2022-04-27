import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdViewLinkComponent } from './third-view-link.component';

describe('ThirdViewLinkComponent', () => {
  let component: ThirdViewLinkComponent;
  let fixture: ComponentFixture<ThirdViewLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdViewLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdViewLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
