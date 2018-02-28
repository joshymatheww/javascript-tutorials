var first = 0;
var second = 1;
var sum = 0;
document.write('<br /><h3>Fibinoci series upto 100 </h3>');
document.write(first +",");
document.write(second +",");
for(var i=first; i<20 ; i++){
  sum = first+second;
  if(sum >100){
    break;
  }
  document.write(sum +",");
  first = second;
  second = sum;

}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].className = "link-class"
  console.log(links[i]);
}
document.write("<br />");
document.write("<h3>Star Printing</h3>");
var spaceCount = 5;
var printCount = 1;
for(var i=0;i<5;i++){
  for(var j=1;j<=spaceCount;j++){
    document.write("&nbsp;");
  }
  for (var k = 1; k <= printCount; k++) {
    document.write(" * ");
  }
  spaceCount--;
  printCount++;
  document.write("<br />");
}
for(var i=0;i<5;i++){
  for(var j=0;j<=spaceCount;j++){
    document.write("&nbsp;");
  }
  for (var k = 1; k < printCount; k++) {
    document.write(" * ");
  }
  spaceCount++;
  printCount--;
  document.write("<br />");
}
console.log(spaceCount);
console.log(printCount);
document.write('<br /><h3>Largest of 3 numbers </h3>');

var num1 = 97;
var num2 = 102;
var num3 = 666;

if(num1 > num2 && num1>num3){
  document.write("num1 :" + num1 + " is the largest");
}else if(num2 > num1 && num2>num3){
  document.write("num2 :" + num2 + " is the largest");
}
else if(num3 > num1 && num3>num2){
  document.write("num3 :" + num3 + " is the largest");
}
