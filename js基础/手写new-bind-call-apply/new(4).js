// ECMAScript 2015 (6th Edition, ECMA-262)
// 12.3.3 The new Operator
// 12.3.3.1 Runtime Semantics: Evaluation
// NewExpression : new NewExpression
// Return EvaluateNew(NewExpression, empty).
// MemberExpression : new MemberExpression Arguments
// Return EvaluateNew(MemberExpression, Arguments).
// 12.3.3.1.1 Runtime Semantics: EvaluateNew(constructProduction, arguments)
// The abstract operation EvaluateNew with arguments constructProduction, and arguments performs the following steps:

// Assert: constructProduction is either a NewExpression or a MemberExpression.
// Assert: arguments is either empty or an Arguments production.
// Let ref be the result of evaluating constructProduction.
// Let constructor be GetValue(ref).
// ReturnIfAbrupt(constructor).
// If arguments is empty, let argList be an empty List.
// Else,
// Let argList be ArgumentListEvaluation of arguments.
// ReturnIfAbrupt(argList).
// If IsConstructor (constructor) is false, throw a TypeError exception.
// Return Construct(constructor, argList).