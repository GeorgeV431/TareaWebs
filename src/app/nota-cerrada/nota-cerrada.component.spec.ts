import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCerradaComponent } from './nota-cerrada.component';

describe('NotaCerradaComponent', () => {
  let component: NotaCerradaComponent;
  let fixture: ComponentFixture<NotaCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaCerradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
