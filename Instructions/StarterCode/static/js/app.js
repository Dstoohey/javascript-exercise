// from data.js
var tableData = data;

//console.log(data)


//constructing function to make our table 
function buildTable(a, b, c, d, e, f, g) {
     var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");

   for (var i = 0; i < a.length; i++) {
    var trow = tbody.append("tr");
    trow.append("td").text(a[i]);
    trow.append("td").text(b[i]);
    trow.append("td").text(c[i]);
    trow.append("td").text(d[i]);
    trow.append("td").text(e[i]);
    trow.append("td").text(f[i]);
    trow.append("td").text(g[i]);
}

    //append tr to tbody



}





var button = d3.select("#filter-btn");
button.on("click", function(){

   var userInput = d3.select("#datetime");
   var userValue = userInput.property("value");
    console.log(userValue)

//     function filterDate(x) {
//         return x.datetime === userValue

//     }

 //var filteredData = tableData.filter(filterDate)

//arrowfunction
var filteredData = tableData.filter(x => x.datetime === userValue); 

console.log(filteredData)

var date = filteredData.map(x => x.datetime)
console.log(date)

var city = filteredData.map(x => x.city)
console.log(city)
var state = filteredData.map(x => x.state)
var country = filteredData.map(x => x.country)
var shape = filteredData.map(x => x.shape)
var durationMinutes = filteredData.map(x => x.durationMinutes)
var comments = filteredData.map(x => x.comments)



buildTable(date, city, state, country, shape, durationMinutes, comments) 



})







