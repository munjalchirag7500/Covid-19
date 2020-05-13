import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatetrackerComponent } from './statetracker.component';

describe('StatetrackerComponent', () => {
  let component: StatetrackerComponent;
  let fixture: ComponentFixture<StatetrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatetrackerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatetrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
