import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleftComponent } from './cleft.component';

describe('CleftComponent', () => {
  let component: CleftComponent;
  let fixture: ComponentFixture<CleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
