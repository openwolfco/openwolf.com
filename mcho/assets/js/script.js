
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("confirmed").innerHTML = myObj.fields.confirmed.stringValue;
    document.getElementById("pum").innerHTML = myObj.fields.pum.stringValue;
    document.getElementById("contact").innerHTML = myObj.fields.contact.stringValue;
    document.getElementById("ili").innerHTML = myObj.fields.ili.stringValue;
    document.getElementById("pumCompleted").innerHTML = myObj.fields.pumCompleted.stringValue;

  }
};



xmlhttp.open("GET", "https://firestore.googleapis.com/v1beta1/projects/jsondata-80665/databases/(default)/documents/users/w2CvcqVGMD5b1aqraQML", true);
xmlhttp.send();