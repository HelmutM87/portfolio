import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponentComponent } from './about-me-component.component';

describe('AboutMeComponentComponent', () => {
  let component: AboutMeComponentComponent;
  let fixture: ComponentFixture<AboutMeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
