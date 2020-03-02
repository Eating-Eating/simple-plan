// ECMAScript 2015 (6th Edition, ECMA-262)
// Function.prototype.bind ( thisArg , ...args)
// When the bind method is called with argument thisArg and zero or more args, it performs the following steps:

// Let Target be the this value.
// If IsCallable(Target) is false, throw a TypeError exception.
// Let args be a new (possibly empty) List consisting of all of the argument values provided after thisArg in order.
// Let F be BoundFunctionCreate(Target, thisArg, args).
// ReturnIfAbrupt(F).
// Let targetHasLength be HasOwnProperty(Target, "length").
// ReturnIfAbrupt(targetHasLength).
// If targetHasLength is true, then
// Let targetLen be Get(Target, "length").
// ReturnIfAbrupt(targetLen).
// If Type(targetLen) is not Number, let L be 0.
// Else,
// Let targetLen be ToInteger(targetLen).
// Let L be the larger of 0 and the result of targetLen minus the number of elements of args.
// Else let L be 0.
// Let status be DefinePropertyOrThrow(F, "length", PropertyDescriptor {[[Value]]: L, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true}).
// Assert: status is not an abrupt completion.
// Let targetName be Get(Target, "name").
// ReturnIfAbrupt(targetName).
// If Type(targetName) is not String, let targetName be the empty string.
// Perform SetFunctionName(F, targetName, "bound").
// Return F.
// The length property of the bind method is 1.

// NOTE 1 Function objects created using Function.prototype.bind are exotic objects. They also do not have a prototype property.

// NOTE 2 If Target is an arrow function or a bound function then the thisArg passed to this method will not be used by subsequent calls to F.