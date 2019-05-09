import * as firebase from 'firebase'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }




////child_remove
//database.ref('expenses').on('child_removed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val())
//})
//
////child_changed
//database.ref('expenses').on('child_changed', (snapshot) => {
//  console.log(snapshot.key, snapshot.val())
//})
//
//// child_added
//database.ref('expenses').on('child_added', (snapshot) => {
//  console.log(snapshot.key, snapshot.val())
//})

//database.ref('expenses').on('value', (snapshot) => {
//  const expenses = []
//  snapshot.forEach((childSnapshot) => {
//    expenses.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//    })
//  })
//  console.log(expenses)
//})


//const expense = {
//    description: 'Rower',
//    note: 'Naprawa',
//    amount: 20000,
//    createdAt: 0
//}
//database.ref('expenses').push(expense)

//database.ref().set({
//  name: "",
//  age: 26,
//  job: {
//    title: 'Software developer',
//    company: 'XYZ'
//  },
//  location: {
//    city: "",
//    country: "Poland"
//  }
//}).then(() => {
//  console.log('data is saved')
//}).catch((e) => {
//  console.log('This failed', e)
//})
//
//database.ref().on('value', (snapshot) => {
//  console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} in ${snapshot.val().job.company}`)
//})
