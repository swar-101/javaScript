# Understanding Observables 
**Observable** is a function that creates an observer and attaches it to the source where values are expected from,
for e.g. -clicks
        -mouse events from a DOM element or an HTTP request, etc.

**Observer** is an object with callback functions, that will get called when there is interaction to the Observable, 
    i.e., the source has interacted 
        for e.g. button click, Http request, etc.

## Creating an Observable
The observable can be created 

1. using observable constructor  

```js
import { Observable } from 'rxjs';

var observable = new Observable(
    function subscribe(subscriber) {
        subscriber.next("My First Observable")
    }
);
```
`we have created an observable and added a message "My First Observable" using subscriber.next() method available inside Observable.`

2. using observable create method and by passing subscribe function as an argument shown to it as shown below- 

```js
import { Observable } from 'rxjs';

var observer = Observable.create(
    function subscribe(subscriber) {
        subscriber.next("My first Observable")
    }
);
```
`we can also create Observable using, Observable.create() method`

## Subscribe Observable

`we can subscribe to an observable as follows`

```js
observer.subscribe(x => console.log(x));
```

`when the observer is subscribed, it will start the execution of the Observable`

## Execute Observable

An observable gets executed when it is subscribed, An observer is an object with 3 methods that are notified

- next() - this method will send values like number, string, object, etc.
- complete() - this method will not send any value and indicates the observer as complete.
- error() - This method will send error if any.

Let us create the observable with all three notifications and executes the same.

```js
import { Observable } from 'rxjs';

var Observer = new Observable (
    function subscribe(subscriber) {
        try {
            subscriber.next("My First Observable");
            subscriber.next("Testing Observable");
            subscriber.complete();  
        } catch(e) {
            subscriber.error(e);
        }
    }
);

observer.subscribe(x => console.log(x), (e) =>console.log(e),
        ()=> console.log("Observable is complete));
```

`In the above code, we have added next(), error() and complete() method.`

```js
try{
    subscriber.next("My First Observable");
    subscriber.next("Testing observables");
    subscriber.complete();
} catch(e) {
    subscriber.error(e);
}
```