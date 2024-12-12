# Firebase onAuthStateChanged Memory Leak
This repo demonstrates a common error when using Firebase's `onAuthStateChanged` listener.  Forgetting to unsubscribe from the listener can lead to memory leaks and unexpected behavior.

The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides the correct solution.

## Problem
The `onAuthStateChanged` listener is attached but never detached, causing multiple listeners to be added each time authentication changes. This results in memory usage continuing to grow indefinitely.

## Solution
The solution involves using the `unsubscribe` function returned by `onAuthStateChanged` to properly detach the listener when it's no longer needed. This prevents memory leaks and ensures efficient resource management.
