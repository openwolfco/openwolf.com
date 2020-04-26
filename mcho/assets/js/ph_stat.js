var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
    document.getElementById("total_count").innerHTML = obj.ph_total;

  }
};
xmlhttp.open("GET", "https://res.cloudinary.com/openwolf/files/covidStat.json/covidStat", true);
xmlhttp.send();
