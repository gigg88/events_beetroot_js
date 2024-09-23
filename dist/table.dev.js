"use strict";

//2.Create an html-page with a large table. When clicking the column heading, it is necessary to sort data of that column.
// Note that numerical values should be sorted as numbers, not as strings.
var countries = [{
  id: 1,
  country: "Estonia",
  capital: "Tallinn"
}, {
  id: 2,
  country: "Finland",
  capital: "Helsinki"
}, {
  id: 3,
  country: "Sweden",
  capital: "Stockholm"
}];

function createTable() {
  var tableBody = document.querySelector('tbody');
  countries.forEach(function (country) {
    var row = document.createElement('tr');
    var idCell = document.createElement('td');
    var countryCell = document.createElement('td');
    var capitalCell = document.createElement('td');
    idCell.textContent = country.id;
    countryCell.textContent = country.country;
    capitalCell.textContent = country.capital;
    row.appendChild(idCell);
    row.appendChild(countryCell);
    row.appendChild(capitalCell);
    tableBody.appendChild(row);
  });
}

createTable();