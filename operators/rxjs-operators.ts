/* 
example of how RxJS operators work
    for e.g. using pipe()
*/
import { of } from  'rxjs';
import { filter, reduce  } from 'rxjs/operators';

let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
let case1 = test1.pipe(
    filter(x => x%2 === 0),
    reduce((acc, one) => acc + one, 0)
)
case1.subscribe(x =>  console.log(x));  



/* 
Creation Observable operator: from()
   This operator will create observable from
    - an array
    - an array like object
    - a promise
    - an iterable object
    - an observable-like object
*/
import { from } from 'rxjs';

let arr = [2, 4, 6, 8, 10];
let test = from(arr);
test.subscribe(x => console.log(x));



/* 
Creation Observable operator: fromEvent()
    This operator will give output as an 
    observable that is to be used on elements
    that emit events for e.g. buttons,
                              clicks, etc.
*/
import { fromEvent, interval  } from 'rxjs';
import { buffer } from 'rxjs/operators';

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, 'click');
let interval_events = interval(1000);
let buffered_array = interval_events.pipe(buffer(btn_clicks));
buffered_array.subscribe(arr => console.log(arr));
