import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLawComponent } from './family-law.component';

describe('FamilyLawComponent', () => {
  let component: FamilyLawComponent;
  let fixture: ComponentFixture<FamilyLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
