import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialLawComponent } from './commercial-law.component';

describe('CommercialLawComponent', () => {
  let component: CommercialLawComponent;
  let fixture: ComponentFixture<CommercialLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
