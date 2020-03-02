// ECMAScript 2015 (6th Edition, ECMA-262)
// Function.prototype.apply ( thisArg, argArray )
// When the apply method is called on an object func with arguments thisArg and argArray, the following steps are taken:

// If IsCallable(func) is false, throw a TypeError exception.
// If argArray is null or undefined, then
// Return Call(func, thisArg).
// Let argList be CreateListFromArrayLike(argArray).
// ReturnIfAbrupt(argList ).
// Perform PrepareForTailCall().
// Return Call(func, thisArg, argList).
// The length property of the apply method is 2.

// NOTE 1 The thisArg value is passed without modification as the this value. This is a change from Edition 3, where an undefined or null thisArg is replaced with the global object and ToObject is applied to all other values and that result is passed as the this value. Even though the thisArg is passed without modification, non-strict functions still perform these transformations upon entry to the function.

// NOTE 2 If func is an arrow function or a bound function then the thisArg will be ignored by the function [[Call]] in step 6.