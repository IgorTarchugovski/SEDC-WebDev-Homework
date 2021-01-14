// HOMEWORK PART 3
/*
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!
*/

let inputMoney = parseInt(
    prompt("Enter the amount of money you whant to withdraw: $")
  );
  
  function atm(x) {
    let accountMoney = 1000;
    let moneyLeft = accountMoney - x;
    if (x > accountMoney) {
      console.log("Not enough money!");
    } else if (x <= accountMoney) {
      console.log(`Ammount withdrawn: $${x}\nMoney left: $${moneyLeft}`);
    } else {
      console.log("Enter amount in number!");
    }
  }
  
  atm(inputMoney);