(function() {
    let details = [
        ["Name", "Phone Number", "Email", "Designation", "Company"],
        ["Vishal Solanki", "9999998888", "v@gmail.com", "Technical Trainee", "Gemini Solutions"],
        ["Kajal Agarwal", "8888777777", "k@gmail.com", "Finance Analyst", "Accenture"],
        ["Shivam Yadav", "9292929292", "s@gmail.com", "Technical Trainee", "Gemini Solutions"],
        ["Anil", "7263845302", "A@gmail.com", "Technical Trainee", "Gemini Solutions"]
    ];

    var table = document.createElement("table");
    table.setAttribute("class", "table table-striped");
    var tHead = document.createElement("tHead");
    tHead.setAttribute("class", "table-dark");
    
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    var value1 = document.createTextNode(details[0][0]);
    var value2 = document.createTextNode(details[0][1]);
    var value3 = document.createTextNode(details[0][2]);
    var value4 = document.createTextNode(details[0][3]);
    var value5 = document.createTextNode(details[0][4]);

    // appending the childs
    th1.appendChild(value1);
    th2.appendChild(value2);
    th3.appendChild(value3);
    th4.appendChild(value4);
    th5.appendChild(value5);

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);

    tHead.appendChild(tr);
    table.appendChild(tHead);

    var tDiv = document.createElement("tbody");
    // creating the body by looping over 
    for(var i = 1; i < 6; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");

        var v1 = document.createTextNode(details[i][0]);
        var v2 = document.createTextNode(details[i][1]);
        var v3 = document.createTextNode(details[i][2]);
        var v4 = document.createTextNode(details[i][3]);
        var v5 = document.createTextNode(details[i][4]);

        td1.appendChild(v1);
        td2.appendChild(v2);
        td3.appendChild(v3);
        td4.appendChild(v4);
        td5.appendChild(v5);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tDiv.appendChild(tr);
        table.appendChild(tDiv);
    }

    document.body.appendChild(table);
})();
