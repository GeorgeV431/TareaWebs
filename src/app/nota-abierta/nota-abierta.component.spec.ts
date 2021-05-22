import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaAbiertaComponent } from './nota-abierta.component';

describe('NotaAbiertaComponent', () => {
  let component: NotaAbiertaComponent;
  let fixture: ComponentFixture<NotaAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaAbiertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
