const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/auth/web/user-properties
  console.log(user.email);
} else {
  // User is signed out
  console.log('user is signed out');
}
});

// unsubscribe(); // Important: this line was missing causing a memory leak and multiple calls