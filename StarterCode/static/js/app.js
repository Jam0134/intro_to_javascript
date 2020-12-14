// from data.js

//Worked with Jamie and Victor on this 


var tableData = data;

let tableBody = d3.select("tbody");

function createUFOTable(tableData)

{

//Clear out table
tableBody.html("");
 
//Loop through the list of dictionaries

    tableData.forEach(ufoSighting => {
        var row = tableBody.append("tr");
        row.append("td").text(ufoSighting.datetime);
        row.append("td").text(ufoSighting.city)
        row.append("td").text(ufoSighting.state)
        row.append("td").text(ufoSighting.country)
        row.append("td").text(ufoSighting.shape)
        row.append("td").text(ufoSighting.durationMinutes)
        row.append("td").text(ufoSighting.comments)
    });
};

// UFO Table

createUFOTable(tableData);

// Define filter  

let filterButton = d3.select("#filter-btn");

filterButton.on("click", ufoFiltering);

// Filter data table 
function dateFilter(dt) {
    let inputSearchDate = d3.select("#datetime");
    let inputSearchDateValue = inputSearchDate.property("value");
    if (inputSearchDateValue)
        return dt.datetime === inputSearchDateValue;  
    return true;
}

function ufoFiltering() {
    console.log("Event Fired");
    d3.event.preventDefault();
    
    
// Remove Table 
    d3.select("tbody").selectAll("tr").remove();
    let ufoFilteredData = tableData.filter(dateFilter);

    ufoFilteredData.forEach(ufoSighting => {
        var row = tableBody.append("tr");
        row.append("td").text(ufoSighting.datetime);
        row.append("td").text(ufoSighting.city)
        row.append("td").text(ufoSighting.state)
        row.append("td").text(ufoSighting.country)
        row.append("td").text(ufoSighting.shape)
        row.append("td").text(ufoSighting.durationMinutes)
        row.append("td").text(ufoSighting.comments)

    });
};