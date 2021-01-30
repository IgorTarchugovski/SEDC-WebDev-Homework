// Exercise 2
/*
2. Create a Javascript ATM machine. 
The ATM should have the following functions:
- make desposit (this function should add money to the users balance)
- make withdrawal (this function should should withdraw money to the users balance)
- get the balance (this function should display the current balance of the user)
- exit (this function should close the window)
create interactive menu using alerts
*/

let saldo = 1000;

function atm() {

  let option = Number(prompt("ATM \nTo make deposit enter: 1\nTo make withdraw enter: 2\nTo get the balance enter: 3\nTo Exit enter: 4"));
  
  if (option == 1 ) {
  function deposit() {
    let addMony = Number(prompt("Add money to balance: "));
    if (addMony >= 0) {
      saldo = saldo + addMony;
      console.log(saldo);
    }
    alert(`You added: ${addMony} \nYour current balance is: ${saldo}`);
  }
  deposit();
  atm();
} else if (option == 2) {

  function withdraw() {
    let withdrawMoney = Number(prompt("Enter the amount you want to withdraw: "));
    if (withdrawMoney >= 0) {
      saldo -= withdrawMoney;
    }
    alert(`You withdrawn: ${withdrawMoney} \nYour current balance is: ${saldo}`);
  }
  withdraw();
  atm();
} else if (option == 3) {
  function balance() {
    alert(`Your current balance is: ${saldo}`);
  }
  balance();
  atm();
} else if (option == 4) {
  alert("Thank you");
} else {
  alert("Please enter one of the folowing options");
  atm();
}

}

atm();
