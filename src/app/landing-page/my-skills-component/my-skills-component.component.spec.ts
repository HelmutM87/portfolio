import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsComponentComponent } from './my-skills-component.component';

describe('MySkillsComponentComponent', () => {
  let component: MySkillsComponentComponent;
  let fixture: ComponentFixture<MySkillsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySkillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
