var myDate = new Date();
document.write("<h3>Current Date</h3>");
document.write(myDate);
document.write("<h3>Past Date</h3>");
document.write(new Date(1545,11,31,10,30,12));
document.write("<h3>Future Date</h3>");
document.write(new Date(2030,5,1,10,30,12));

var birthDate = new Date(1987,0,8,12,30,12);
document.write("<h3>Birth Date</h3>");
document.write(birthDate);
document.write("<h3>Get month :</h3>" + birthDate.getMonth());
document.write("<h3>Get Year :</h3>" + birthDate.getFullYear());
document.write("<h3>Get Date :</h3>" + birthDate.getDate());
document.write("<h3>Get Hours :</h3>" + birthDate.getHours());
document.write("<h3>Get Time :</h3>" + birthDate.getTime());
