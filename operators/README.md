## RxJS Operators

Operators are an important part of RxJS.
An operator is a pure function that takes in **observable as input** and 
the output is also **observable**.

## Working with Operators

To work with operators we need pipe() method.

```js
let obs = of(1,2,3);    // an observable
obs.pipe(
    operator1(),
    operator2(),
    operator3(),
    operator3()
)
```

In the above example we have created an observable using of() method that takes in values 1,2 and 3. Now on this observable you can perform different operation using any numbers of operators using pipe() method as shown above. The execution of operators will go sequentially

```js
import { of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';

let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let case1 = test1.pipe(
    filter(x => x%2 === 0),
    reduce((acc, one)=> acc + one, 0)
)
case1.subscribe(x => console.log(x));
```
`Output: 30`

Since, this is a TypeScript code you need to have TypeScript installed locally on your machine.
Go to the terminal and install TypeScript globally on the machine with a `-g` tag

`npm install -g typescript`

Additionally, you need to install RxJS library via npm. 

`npm install --save rxjs`

In the above example, we have used filter() operator that filters even numbers.
                      next, we have used reduce() operator that will add even
                      values and give the result when subscribed.

## List of Observables:

- Creation
    - ajax - this operator will make an ajax request for the given URL.
    ```js

             import { map, reduce } from 'rxjs/operators';
             import { ajax } from 'rxjs/ajax';

             let final_val = ajax('https://jsonplaceholder.typicode.com/users)
                                .pipe( 
                                    map(e => e.response)
                                );
            final_val.subscribe(x => console.log(x));
    ```
    - from -  this operator will create an observable from an array, an array like
              object, a promise, an iterable object, or an observable-like object
    ```js
            let arr = [2, 4, 6, 8, 10]; 
            let test = from(arr);
            test.subscribe(x => console.log(x));
    ```
- Mathematical
- Join 
- Transformation
- Filtering
- Utility 
- Conditional
- Multicasting
- Error Handling

