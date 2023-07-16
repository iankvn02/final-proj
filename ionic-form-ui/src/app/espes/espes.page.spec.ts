import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspesPage } from './espes.page';

describe('EspesPage', () => {
  let component: EspesPage;
  let fixture: ComponentFixture<EspesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
