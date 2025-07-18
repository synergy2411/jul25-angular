import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTestComponent } from './the-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TheTestComponent', () => {
  let component: TheTestComponent;
  let fixture: ComponentFixture<TheTestComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheTestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it("should render 'John Doe' in heading element", () => {
    const h1Element = de.query(By.css('#heading'));
    expect(h1Element.nativeElement.textContent).toContain('John Doe');
  });

  it("should create 'username' property", () => {
    expect(component.username).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
