import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosComponents } from './sobrenos-components';

describe('SobrenosComponents', () => {
  let component: SobrenosComponents;
  let fixture: ComponentFixture<SobrenosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobrenosComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrenosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
