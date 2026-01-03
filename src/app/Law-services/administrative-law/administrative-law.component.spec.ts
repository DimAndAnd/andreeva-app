import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeLawComponent } from './administrative-law.component';

describe('AdministrativeLawComponent', () => {
  let component: AdministrativeLawComponent;
  let fixture: ComponentFixture<AdministrativeLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
