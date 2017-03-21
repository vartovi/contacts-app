
var table = document.getElementById('users');

function addUser() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('streetAddress').value + ', ' + document.getElementById('city').value;
    var contact = [firstName, lastName, phone, address];
    var id = Number(localStorage.length) + 1;
    localStorage.setItem(''+id, contact);

    location.reload();
}

function showTable() {

    for(var i = 1; i<=localStorage.length; i++){
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        var arr = localStorage.getItem(''+i).split(',');

        cell1.innerHTML = arr[0];
        cell2.innerHTML = arr[1];
        cell3.innerHTML = arr[2];
        cell4.innerHTML = "<a id='"+ (table.rows.length-1) +"' href='https://www.google.fi/maps/place/"+arr[3]+arr[4]+"' target='_blank'>"+arr[3]+", "+arr[4]+"</a>";
        cell5.innerHTML = '<input class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="button" value="Delete" onclick="deleteUser(' + i +')">';
        cell6.innerHTML = '<input class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="button" value="Edit" onclick="editUser('+(table.rows.length-1)+')">';
        cell4.value = arr[3] + ',' + arr[4];

        cell1.className = "mdl-data-table__cell--non-numeric";
        cell2.className = "mdl-data-table__cell--non-numeric";
    }
}

function deleteUser(index){
    if (confirm("Are you sure you want to delete this contact?")){
        table.deleteRow(index);
        localStorage.removeItem(''+index);
    }
}

function editUser(index){
    $('.mdl-textfield').addClass('is-dirty');
    document.getElementById('firstName').value = table.rows[index].cells[0].innerHTML;
    document.getElementById('lastName').value = table.rows[index].cells[1].innerHTML;
    document.getElementById('phone').value = table.rows[index].cells[2].innerHTML;
    document.getElementById('streetAddress').value = document.getElementById('' + index).innerHTML.split(',')[0];
    document.getElementById('city').value = document.getElementById('' + index).innerHTML.split(',')[1].trim();
    document.getElementById('addUserButton').value = 'Save';
    document.getElementById('contactId').innerHTML = 'Edit contact:';
    document.getElementById('addUserButton').onclick = function () {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('streetAddress').value + ', ' + document.getElementById('city').value;
        var contact = [firstName, lastName, phone, address];
        localStorage.setItem(''+index, contact);
        location.reload();
    }
}

