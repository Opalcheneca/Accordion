var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {
    this.classList.toggle("active");
    var hidden = this.nextElementSibling;
    if (hidden.style.maxHeight){
      hidden.style.maxHeight = null;
    } else {
      hidden.style.maxHeight = hidden.scrollHeight + "px";
    } 
  }
}