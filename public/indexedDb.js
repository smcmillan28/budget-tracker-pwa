const transName = document.getElementById("t-name");
const transAmount = document.getElementById("t-amount");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");

const request = window.indexedDB.open("budget", 1); 

function addTransaction() {
    const trans = {
        name: transName.value,
        amount: transAmount.value,
    }

    console.log(trans);
}

// Create schema
request.onupgradeneeded = e => {
    // const db = e.target.result;

    // Creates an object store with a budgetID keypath that can be used to query on.
    // const budgetStore = db.createObjectStore("transactions", { keyPath: "name" });
    // Creates a budgetIndex that we can query on.
}

// Opens a transaction, accesses the toDoList objectStore and budgetIndex.
request.onsuccess = () => {
    // const db = request.result;

    // Add data to our objectStore

    // Return all items from db
};

request.onerror = () => {
    console.log("error!");
}

addButton.addEventListener("click", addTransaction);
