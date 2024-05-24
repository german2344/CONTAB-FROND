import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosListComponent } from './procesos-list.component';

describe('ProcesosListComponent', () => {
  let component: ProcesosListComponent;
  let fixture: ComponentFixture<ProcesosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcesosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
