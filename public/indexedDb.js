const transName = document.getElementById("t-name");
const transAmount = document.getElementById("t-amount");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");

const request = window.indexedDB.open("budget", 1);

function addTransaction(tname, tamount) {
    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("transactions", "readwrite");

        const tranStore = transaction.objectStore("transactions");
        tranStore.add({
            name: tname,
            amount: tamount
        });
    }
}

// Create schema
request.onupgradeneeded = event => {
    const db = event.target.result;

    const budgetStore = db.createObjectStore("transactions", {keyPath: "transactionid"});
    budgetStore.createIndex("name", "name");
    budgetStore.createIndex("amount", "amount");
}

// Writing async function that will create the database then allow us to write/pull from it
addButton.addEventListener("click", function(event) {
    event.preventDefault();
    addTransaction(transName.value, transAmount.value)
});
subButton.addEventListener("click", function(event) {
    event.preventDefault();
    addTransaction(transName.value, transAmount.value);
});

// const trans = {
//     name: transName.value,
//     amount: transAmount.value,
// }
