import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborLawComponent } from './labor-law.component';

describe('LaborLawComponent', () => {
  let component: LaborLawComponent;
  let fixture: ComponentFixture<LaborLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
