import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDetailsComponent } from './proposal-details.component';

describe('ProposalDetailsComponent', () => {
  let component: ProposalDetailsComponent;
  let fixture: ComponentFixture<ProposalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalDetailsComponent]
    });
    fixture = TestBed.createComponent(ProposalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
