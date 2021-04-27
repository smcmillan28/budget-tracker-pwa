const transName = document.getElementById("t-name");
const transAmount = document.getElementById("t-amount");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");

const request = window.indexedDB.open("budget", 1);

// Create schema
request.onupgradeneeded = event => {
    const db = event.target.result;

    const budgetStore = db.createObjectStore("budget", { keyPath: "name" });
    budgetStore.createIndex("transactionIndex", "amount");
}

addButton.addEventListener("click", request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["budget"], "readwrite");
    const budgetStore = transaction.objectStore("budget");
    const transactionIndex = budgetStore.index("transactionIndex");

    budgetStore.add({
        name: transName.value,
        amount: Math.abs(transAmount.value),
        date: Date.now()
    });

    const getRequest = budgetStore.getAll();
    getRequest.onsuccess = () => {
        console.log(getRequest.result);
    };
});

subButton.addEventListener("click", request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["budget"], "readwrite");
    const budgetStore = transaction.objectStore("budget");
    const transactionIndex = budgetStore.index("transactionIndex");

    budgetStore.add({
        name: transName.value,
        amount: -Math.abs(transAmount.value),
        date: Date.now()
    });

    const getRequest = budgetStore.getAll();
    getRequest.onsuccess = () => {
        console.log(getRequest.result);
    };
});

