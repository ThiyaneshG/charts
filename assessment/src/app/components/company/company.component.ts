import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/counter.actions';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
count$ : Observable<number>;

  constructor(private store: Store<{count : number}>) {
    this.count$ = store.pipe(select('count'));
}
increment():void{
  this.store.dispatch(increment())
}
decrement():void{
  this.store.dispatch(decrement())
}
reset():void{
  this.store.dispatch(reset())
}
}