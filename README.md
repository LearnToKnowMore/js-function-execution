# js-function-execution
#### Direct vs Indirect function calls in Vanilla JS
----
Function(s) are executed, when they're defined/ declared and called with `()` at the end functionName.
```javascript
function foo() { ... } // declare foo function
// ...
foo(); // calling foo function - foo is executed when js file is loaded.
```
But to execute a function on a event, such as button click/ mouse event, etc., we shouldn't call function on page load. Instead function should be called when event occurs. This can be attained in two ways
1. Anonymous functions `() => { }`
2. Use [`.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) on function
---
![image](https://user-images.githubusercontent.com/26609973/79126012-1eced480-7d6d-11ea-8160-8d7197cd55d1.png)

![image](https://user-images.githubusercontent.com/26609973/79126409-dd8af480-7d6d-11ea-9443-0b061f92a0ee.png)
