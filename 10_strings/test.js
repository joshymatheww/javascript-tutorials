var myString = 'I\'m a "fun" string';
var name = "Sujomol Danson"
document.write('<p>'+myString+'</p>');
document.write('<p>Length of my string is: '+myString.length+'</p>');
document.write('<p>To Uppercase of my string is: '+myString.toUpperCase()+'</p>');
document.write('<p>To Lowercase of my string is: '+myString.toLowerCase()+'</p>');
document.write('<p>Index of "fun" in my string is: '+myString.indexOf("fun")+'</p>');

var str2 = myString.slice(6,11);
document.write('<p>Slicing "fun" from my string is: '+str2+'</p>');

var langs = "PHP,C,CSS,JavaScript,SQL";
var langsArray = langs.split(",");
document.write('<p> languages known: '+langs+'</p>');

for (var i = 0; i < langsArray.length; i++) {
  document.write('<p>'+langsArray[i]+'</p>');
}
console.log(langsArray);
