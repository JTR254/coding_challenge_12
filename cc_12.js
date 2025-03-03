// Task 1 - Created Revenue Metric Card

// creates the dashboard selector by element
const dashboardId = document.getElementById("dashboard")
const dashboardQuery = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");

revenueCard.setAttribute("class", "metric-card"); // sets attribute of revenue card
revenueCard.setAttribute("id", "revenueCard"); // sets attribute of revenue card
     
const title = document.createElement("h3"); 
title.textContent = "Revenue"; // heading in the revenue card is "Revenue"
        
const value = document.createElement("p");
value.textContent = "$0"; // value is $0 and written as a paragraph
 
revenueCard.appendChild(title);
revenueCard.appendChild(value);

dashboardId.appendChild(revenueCard);

// Task 2 - Updated Metric Cards via Array Conversion

const metricCards = document.querySelectorAll(".metric-card") // selects all within the class "metric-card"

const metricCardsArray = Array.from(metricCards) // creates an array from metricCards

metricCardsArray.forEach(card => { // for each card, in the heading, add " - Updated"
    const title = card.querySelector("h3");
    title.textContent += " - Updated";
})

// Task 3 - Implemented Dynamic Inventory List

const intentoryList = document.getElementById("inventoryList"); 

function addInventoryItem(product) { // creates a function that adds inventory items
    let newLi = document.createElement ("li");
    newLi.setAttribute("class", "product-item"); // adds a class
    newLi.setAttribute("dataset", product); // adds a dataset
    newLi.addEventListener("click", () => {removeInentoryItem(newLi)});
    newLi.textContent = product;
    inventoryList.appendChild(newLi); // appends the item to the inventory list
};

addInventoryItem("Click me"); // adds a "click me" button
addInventoryItem("Add a product below"); // adds a "add a product below" button

// Task 4 - Demonstrated Event Bubbling in Customer Section
