/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheOneListComponent } from './the-one-list.component';

describe('TheOneListComponent', () => {
  let component: TheOneListComponent;
  let fixture: ComponentFixture<TheOneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheOneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
