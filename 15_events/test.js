/*var firstTitle = document.getElementsByTagName('h2')[0];
firstTitle.onclick = function () {
  alert("You clicked me");
};*/
window.onload = function () {
  var content = document.getElementById('page-content');
  var button = document.getElementById('show-more');

  button.onclick = function () {
    if(content.className== "open"){
      content.className="";
      button.textContent = "Show More";
    }else{
      content.className="open";
      button.textContent = "Show Less";
    }
  };
};
