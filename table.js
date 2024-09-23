//2.Create an html-page with a large table. When clicking the column heading, it is necessary to sort data of that column.
// Note that numerical values should be sorted as numbers, not as strings.


const countries = [
    { id: 1, country: "Estonia", capital: "Tallinn" },
    { id: 2, country: "Finland", capital: "Helsinki" },
    { id: 3, country: "Sweden", capital: "Stockholm" },
   
  ];


  function createTable() {
    const tableBody = document.querySelector('tbody');
    countries.forEach(country => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const countryCell = document.createElement('td');
      const capitalCell = document.createElement('td');
  
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