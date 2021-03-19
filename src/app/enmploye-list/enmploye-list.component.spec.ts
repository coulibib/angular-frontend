import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnmployeListComponent } from './enmploye-list.component';

describe('EnmployeListComponent', () => {
  let component: EnmployeListComponent;
  let fixture: ComponentFixture<EnmployeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnmployeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnmployeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
