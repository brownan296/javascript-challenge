//d3----> data driven documents (library for javascript for visualization in web browser)
//(tbody) table body
//(tr) table row
//(td) table data
//create button and inputs



var tableData = data;
// make tbody variable and select
var tbody = d3.select("tbody");

// create and array of objects/append to web page/ add new rows 
data.forEach(function (UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");

  Object.entries(UFOreport).forEach(function ([key, value]) {
    console.log(key, value);
    // decl variable cell that appends another row to the html table
    var cell = row.append("td");
    cell.text(value);
  });
});
// button
var button = d3.select("#filter-btn");
// user clicks button 
button.on("click", function() {
    // get the input element to  written in datetime format
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    // get the default value property of the input element
    var inputElementValue = inputElement.property("value");
    console.log(inputElementValue);
    // filter data 
    var inputFilter = data.filter((obj) =>{
        return obj.datetime == inputElementValue;
    });
    console.log(inputFilter);
});