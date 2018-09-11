function toggleImage() {
    var x = document.getElementById("KentPic");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
   
  var buttons = document.querySelectorAll('button');
   
  for (var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }