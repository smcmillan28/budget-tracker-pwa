const transName = document.getElementById("t-name");
const transAmount = document.getElementById("t-amount");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");

const request = window.indexedDB.open("budget", 1);

// Create schema
request.onupgradeneeded = event => {
    const db = event.target.result;

    const budgetStore = db.createObjectStore("budget", {keyPath: "name"});
    budgetStore.createIndex("transactionIndex", "amount");
}

request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["budget"], "readwrite");
    const budgetStore = transaction.objectStore("budget");
    const transactionIndex = budgetStore.index("transactionIndex");

    budgetStore.add({
        name: "Rent",
        amount: 1200
    });
}

// Writing async function that will create the database then allow us to write/pull from it
// addButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     addTransaction(transName.value, transAmount.value)
// });
// subButton.addEventListener("click", function(event) {
//     event.preventDefault();
//     addTransaction(transName.value, transAmount.value);
// });

// const trans = {
//     name: transName.value,
//     amount: transAmount.value,
// }
