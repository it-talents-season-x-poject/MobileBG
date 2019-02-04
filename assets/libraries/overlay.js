function openPage(pageName,element,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.color = "rgb(0, 162, 239)";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.color = color;
  }
  
  document.getElementById("defaultOpen").click();