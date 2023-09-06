import { Observable } from 'rxjs';


// 1. using observable constructor
var observer = new Observable(
    function subscribe(subscriber) {
        subscriber.next("My first Observable")
    }
);

// 2. using Observable.create() method 
var observer = Observable.create(
    function subscribe(subscriber) {
        subscriber.next("My First Observable")
    }
)
// You can subscribe to an observable as follows -
observer.subscribe(x => console.log(x));   