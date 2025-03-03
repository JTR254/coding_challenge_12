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


