/*
Login / Register app

1. Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.
 - Users should be stored in array of User objects
 - Array need to have one admin user by default when the application is started
 - User need to have at least 3 properties: Username, Password and isAdmin
2. Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app"). 
3. Add an option for logging out.
4. Add some further validation to all input fields for the usernames and passwords
 - The user has to enter both username and password
 - Register or login should not proceed with empty inputs
 - Username needs to include more than 3 characters
 - Password has to be longer than 6 characters
5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usersnames and passwords in a list or table.

*/

/*
  1. 2 forms for login and register, one button for logout and one div witch will have all users

  2. Declaration and initalization of global variables (arraysOfAllUsers, currentUser)

  3. event for each button (login, register, logout) and functions

  4. Create function constructer User

  5. Register: get the input or radiobutton value and check if thay are empty or password is less than 6characters or username is less than 3 characters. If statement is correct, create the user like let newUser = new User(username, password, isAdmin); Onse it is created add it to the array

  6. LogIn: check if the two input values are empty? If no, chect if there is username in the arratOfAllUsers and if the password for that user is same with the password in the input field value. Once it is found currentUser shoul be the user that is found.

  7. LogOut: If currentUser !== null, than currentUser = {}

  8. Check if currentUser is admin and if it is admin show all users from arrayOfAllUsers in the div
*/




let arrayOfAllUsers = [
  {
    username: "Igor",
    password: "12345678",
    isAdmin: true
  }
];

let currentUser = [{}];

let login = document.getElementById("logInBtn").addEventListener("click", function(){

});

let register = document.getElementById("registerBtn").addEventListener("click", function() {

});



let logout = document.getElementById("logOutBtn").addEventListener("click", function() {

});


