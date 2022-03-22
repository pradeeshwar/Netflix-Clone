import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrightComponent } from './cright.component';

describe('CrightComponent', () => {
  let component: CrightComponent;
  let fixture: ComponentFixture<CrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
