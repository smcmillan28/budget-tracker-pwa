// const request = window.indexedDB.open("budget", 1); 

// // Create schema
// request.onupgradeneeded = event => {
//     const db = event.target.result;

//     // Creates an object store with a budgetID keypath that can be used to query on.
//     const budgetStore = db.createObjectStore("budget", { keyPath: "budgetID" });
//     // Creates a budgetIndex that we can query on.
//     budgetStore.createIndex("budgetIndex", "transactions");
// }

// // Opens a transaction, accesses the toDoList objectStore and budgetIndex.
// request.onsuccess = () => {
//     const db = request.result;
//     const transaction = db.transaction(["budget"], "readwrite");
//     const budgetStore = transaction.objectStore("budget");
//     const budgetIndex = budgetStore.index("budgetIndex");

//     // Add data to our objectStore
//     // budgetStore.add({ listID: "1", transactions: "" });

//     // Return all items from db
//     const getRequestIdx = budgetIndex.getAll();
//     getRequestIdx.onsuccess = () => {
//         console.log(getRequestIdx.result);
//     };
// };
