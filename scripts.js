
var table = document.getElementById('users');

function addUser() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('streetAddress').value + ', ' + document.getElementById('city').value;
    var users = [firstName, lastName, phone, address];
    var id = Number(localStorage.length) + 1;
    localStorage.setItem(''+id, users);

    console.log(table.rows.length);

    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phone;
    cell4.innerHTML = "<a href='https://www.google.fi/maps/place/"+address+"' target='_blank'>"+address+"</a>";
    cell5.innerHTML = '<input type="button" value="Delete" onclick="deleteUser('+(table.rows.length-1)+')">';
}

function showTable() {

    for(var i = 1; i<=localStorage.length; i++){
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        var arr = localStorage.getItem(''+i).split(',');

        cell1.innerHTML = arr[0];
        cell2.innerHTML = arr[1];
        cell3.innerHTML = arr[2];
        cell4.innerHTML = "<a href='https://www.google.fi/maps/place/"+arr[3]+arr[4]+"' target='_blank'>"+arr[3]+", "+arr[4]+"</a>";
        cell5.innerHTML = '<input type="button" value="Delete" onclick="deleteUser(' + i +')">';
    }
}

function deleteUser(index){
    table.deleteRow(index);
    localStorage.removeItem(''+index);
}