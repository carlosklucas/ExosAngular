import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {HeroSearchComponent} from '../hero-search/hero-search.component';
import { TransactionService } from '../transaction.service';
import {HEROES} from '../mock-heroes';

import {DashboardComponent} from './exercise3.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let transactionService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    transactionService = jasmine.createSpyObj('TransactionService', ['getTransactions']);
    getHeroesSpy = transactionService.getTransactions.and.returnValue(of(HEROES));
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent, HeroSearchComponent],
          imports: [RouterModule.forRoot([])],
          providers: [
            {provide: TransactionService, useValue: transactionService},
          ]
        })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', waitForAsync(() => {
       expect(getHeroesSpy.calls.any()).toBe(true);
     }));

  it('should display 4 links', waitForAsync(() => {
       expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
     }));
});
