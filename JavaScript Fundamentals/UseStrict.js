// "use strict" directive in JavaScript helps catch common coding mistakes and makes the code run in a stricter mode. This can prevent issues like using undeclared variables.
//     Example without "use strict" (bad practice)

name = "John"; // No error, but should be declared with let/const/var
console.log(name);

// 🚨 JavaScript allows this, but it can lead to bugs.
//     Example with "use strict" (better practice)

// "use strict";

name = "John"; // ❌ Error: name is not defined
console.log(name);

// ✅ This prevents accidental global variables.
//     Another Example: Preventing Duplicate Parameter Names

// "use strict";

function sum(a, a) { // ❌ Error: Duplicate parameter name not allowed
    return a + a;
}
console.log(sum(2, 3));

// In non-strict mode, this would work but might cause unexpected behavior.
//     When to Use "use strict"?

//     Always at the beginning of a script or function.
// Helps catch errors early.
//     Encourages better coding practices.