(function() {
    var main = document.createElement("div");
    var table = document.createElement("table");
    var t_head = document.createElement("thead");
    var t_body = document.createElement("tbody");

    table.setAttribute("class", "table table-striped");
    table.setAttribute("border", "2");

    table.appendChild(t_head);
    table.appendChild(t_body);

    t_head.appendChild(insertData(["Name", "Phone No.", "Designation", "Project"], "th"));
    t_body.appendChild(insertData(["Vishal", "9999922222", "Technical Trainee", "Angular"], "td"));
    t_body.appendChild(insertData(["Vishal", "9999922222", "Technical Trainee", "Angular"], "td"));
    t_body.appendChild(insertData(["Vishal", "9999922222", "Technical Trainee", "Angular"], "td"));
    t_body.appendChild(insertData(["Vishal", "9999922222", "Technical Trainee", "Angular"], "td"));
    t_body.appendChild(insertData(["Vishal", "9999922222", "Technical Trainee", "Angular"], "td"));
    main.appendChild(table);
    document.body.appendChild(main);
})();

function insertData(data, tag) {
    var t_row = document.createElement("tr");
    for(var i = 0; i < data.length; i++) {
        var row = document.createElement(tag);
        row.innerHTML = data[i];
        t_row.appendChild(row);
    }
    return t_row;
}
