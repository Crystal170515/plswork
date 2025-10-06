let accountBalance = 1000;
let cashBalance = 1000;

function updateBalance() {
  let newAccount = parseFloat(document.getElementById("accountBalance").value);
  let newCash = parseFloat(document.getElementById("cashBalance").value);
  accountBalance = newAccount;
  cashBalance = newCash;
  addHistory(`Balances updated → Account: ${accountBalance}, Cash: ${cashBalance}`);
}

function proceedOperation() {
  let amount = parseFloat(document.getElementById("amount").value);
  let type = document.getElementById("operationType").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (type === "deposit") {
    accountBalance += amount;
    cashBalance -= amount;
    addHistory(`Deposit ${amount} → Account: ${accountBalance}, Cash: ${cashBalance}`);
  } else if (type === "withdraw") {
    if (accountBalance < amount) {
      alert("Insufficient account balance!");
      return;
    }
    accountBalance -= amount;
    cashBalance += amount;
    addHistory(`Withdraw ${amount} → Account: ${accountBalance}, Cash: ${cashBalance}`);
  }

  document.getElementById("accountBalance").value = accountBalance;
  document.getElementById("cashBalance").value = cashBalance;
}

function convertCurrency() {
  let input = parseFloat(document.getElementById("inputAmount").value);
  let type = document.getElementById("currencyType").value;
  let outputBox = document.getElementById("outputAmount");
  let result = 0;

  if (type === "USD") {
    result = input * 36.5; // 1 USD = 36.5 THB
  } else {
    result = input / 36.5;
  }

  outputBox.value = result.toFixed(2);
}

function addHistory(text) {
  let historyBox = document.getElementById("history");
  let date = new Date().toLocaleString();
  historyBox.value += `\n[${date}] ${text}`;
  historyBox.scrollTop = historyBox.scrollHeight;
}