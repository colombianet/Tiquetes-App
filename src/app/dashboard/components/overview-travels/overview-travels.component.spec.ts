import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTravelsComponent } from './overview-travels.component';

describe('OverviewTravelsComponent', () => {
  let component: OverviewTravelsComponent;
  let fixture: ComponentFixture<OverviewTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
