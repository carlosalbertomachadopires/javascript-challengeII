function showData(data) {
    
    let table = d3.select("#data-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)

    })
    
}



function handleClick() {
    let shape = d3.select("#shape-filter-input").property("value")
    let filteredData = data.filter((d) => d.shape === shape)
    showData(filteredData)
}

d3.select("#shape-button").on("click", handleClick) 



 


