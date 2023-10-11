import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODCComponent } from './odc.component';

describe('ODCComponent', () => {
  let component: ODCComponent;
  let fixture: ComponentFixture<ODCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ODCComponent]
    });
    fixture = TestBed.createComponent(ODCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
