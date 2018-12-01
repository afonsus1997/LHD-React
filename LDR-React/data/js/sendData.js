

  function button_handler(){
    var typedInName = document.getElementById("nameText").value;
    var typedInValue = document.getElementById("valueText").value;
    
    console.log(typedInName)
    sendString(typedInName);
    
  }



  function sendString(typedInName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("LEDState").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "StringState?StringTxt="+typedInName , true);
    xhttp.send();
  }
   
  