import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualPropertyLawComponent } from './intellectual-property-law.component';

describe('IntellectualPropertyLawComponent', () => {
  let component: IntellectualPropertyLawComponent;
  let fixture: ComponentFixture<IntellectualPropertyLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntellectualPropertyLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellectualPropertyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
