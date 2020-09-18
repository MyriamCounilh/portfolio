import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsComponent } from './certificats.component';

describe('CertificatsComponent', () => {
  let component: CertificatsComponent;
  let fixture: ComponentFixture<CertificatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
