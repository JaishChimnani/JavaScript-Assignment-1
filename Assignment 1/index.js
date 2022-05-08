(function () {
    var c = 0;
    const arr = [
      ["Name", "Age", "DOB", "Email", "Company"],
      ["Jaish", 19, "09/09/2001", "papaKeheteHaiBadaNaamKarega@gmail.com", "Gemini Solutions"],
      ["Alok kumar yadav", 22, "02/11/2001", "badBoy69@gmail.com", "Capegimini"],
      ["karan", 19, "15/05/2001", "cool_dude_69@gmail.com", "ResoMini"],
      ["Nikhil", 21, "07/05/2001", "Nikhil_theGaint@gmail.com", "IBM"],
      ["Aaryan", 21, "11/02/2001", "aaryan_thedancerboy@gmail.com", "Cognizant"],
    ];
    var table = document.createElement("table");
    table.setAttribute("class", "table table-striped");
    // table.setAttribute("class", "table-striped");
    var tHead = document.createElement("thead");
    tHead.setAttribute("class", "table-dark");
    var tr = document.createElement("tr");
    var name = document.createElement("th");
    var age = document.createElement("th");
    var dob = document.createElement("th");
    var email = document.createElement("th");
    var company = document.createElement("th");
    var text1 = document.createTextNode(arr[0][0]);
    var text2 = document.createTextNode(arr[0][1]);
    var text3 = document.createTextNode(arr[0][2]);
    var text4 = document.createTextNode(arr[0][3]);
    var text5 = document.createTextNode(arr[0][4]);
    // inserting values to table head
    name.appendChild(text1);
    age.appendChild(text2);
    dob.appendChild(text3);
    email.appendChild(text4);
    company.appendChild(text5);
    tr.appendChild(name);
    tr.appendChild(age);
    tr.appendChild(dob);
    tr.appendChild(email);
    tr.appendChild(company);
    tHead.appendChild(tr);
    table.appendChild(tHead);
    var tBody = document.createElement("tbody");
    for (var i = 1; i < 6; i++) {
      var tr = document.createElement("tr");
      var row1 = document.createElement("td");
      var row2 = document.createElement("td");
      var row3 = document.createElement("td");
      var row4 = document.createElement("td");
      var row5 = document.createElement("td");
      var text1 = document.createTextNode(arr[i][0]);
      var text2 = document.createTextNode(arr[i][1]);
      var text3 = document.createTextNode(arr[i][2]);
      var text4 = document.createTextNode(arr[i][3]);
      var text5 = document.createTextNode(arr[i][4]);

      row1.appendChild(text1);
      row2.appendChild(text2);
      row3.appendChild(text3);
      row4.appendChild(text4);
      row5.appendChild(text5);
      tr.appendChild(row1);
      tr.appendChild(row2);
      tr.appendChild(row3);
      tr.appendChild(row4);
      tr.appendChild(row5);
      tBody.appendChild(tr);
      table.appendChild(tBody);
    }
    document.body.appendChild(table);
    tbl.setAttribute("border", "2");
  })();