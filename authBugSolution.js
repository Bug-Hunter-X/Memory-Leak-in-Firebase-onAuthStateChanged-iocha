const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in
  console.log(user.email);
} else {
  // User is signed out
  console.log('user is signed out');
}
});

// Call unsubscribe when the listener is no longer needed, such as before component unmount or on app exit.
export const cleanup = () => {
  unsubscribe();
}
