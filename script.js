// =========================
// Firebase Configuration
// =========================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// =========================
// Show & Hide Forms
// =========================
function openForm(role) {
  // show register form and pre-select role
  document.getElementById("register").classList.remove("hidden");
  document.getElementById("role").value = role;
}

// =========================
// Register New User
// =========================
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Firebase Authentication
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save extra details in Firestore
      return db.collection("users").doc(user.uid).set({
        name: name,
        email: email,
        role: role,
        createdAt: new Date()
      });
    })
    .then(() => {
      alert("Registration successful!");
      document.getElementById("register").classList.add("hidden");
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});

// =========================
// Login Existing User
// =========================
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      document.getElementById("login").classList.add("hidden");
      document.getElementById("proposal").classList.remove("hidden");
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
});

// =========================
// Post Proposal
// =========================
document.getElementById("proposalForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const ideaText = document.getElementById("ideaText").value;
  const user = auth.currentUser;

  if (user) {
    db.collection("proposals").add({
      uid: user.uid,
      proposal: ideaText,
      createdAt: new Date()
    })
    .then(() => {
      alert("Proposal posted successfully!");
      document.getElementById("ideaText").value = "";
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  } else {
    alert("Please login first.");
  }
});
