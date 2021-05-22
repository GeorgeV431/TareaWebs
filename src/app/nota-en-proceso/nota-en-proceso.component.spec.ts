import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEnProcesoComponent } from './nota-en-proceso.component';

describe('NotaEnProcesoComponent', () => {
  let component: NotaEnProcesoComponent;
  let fixture: ComponentFixture<NotaEnProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaEnProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
