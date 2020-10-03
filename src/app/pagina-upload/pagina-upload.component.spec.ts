import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUploadComponent } from './pagina-upload.component';

describe('PaginaUploadComponent', () => {
  let component: PaginaUploadComponent;
  let fixture: ComponentFixture<PaginaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
