var currentDate = new Date();

var myCalendar = function (date,parent) {

  this.locale = "en-us";
  this.daysName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  this.calHtml = "<table class=\"calendar\">";
  this.drawCalendar = function () {
    this.setHeader();
    this.drawContent();
    this.setFooter();
    document.getElementById(parent).innerHTML = this.calHtml;
  }

  this.setHeader  = function () {
    var prevMonth = function () {
      var d = new Date( date || new Date() );
        d.setMonth( d.getMonth() - (1 || 0), d.getDate());
        return (d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
    }

    var nextMonth = function () {
      var d = new Date( date || new Date() );
        d.setMonth( d.getMonth() + (1 || 0), d.getDate());
        return (d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate());
    }

    this.calHtml += "<thead>";
    this.calHtml += "<tr>";
    this.calHtml += "<td><a href='calendar.html?date="+ prevMonth() +"'>	&lt;</a></td>";
    this.calHtml += "<td colspan='5'>"+ date.toLocaleString(this.locale,{month:'long'}) +" " + date.getFullYear() +"</td>";
    this.calHtml += "<td><a href='calendar.html?date="+ nextMonth() +"'>	&gt;</a></td>";
    this.calHtml += "</tr>"
    this.calHtml += "<tr>";
      for (var i = 0; i < this.daysName.length; i++) {
        this.calHtml += "<td>"+ this.daysName[i] +"</td>";
      }
    this.calHtml += "</tr>";
    this.calHtml += "</thead>";
  }

  this.drawContent = function () {
    var spaceCount = date.getDay();
    var cellCount = 0;
    var totalDays = new Date(date.getFullYear(),parseInt(date.getMonth()+1),0).getDate();

    this.calHtml  += "<tbody><tr>";
    for (var i = 0; i < spaceCount; i++) {
      this.calHtml += "<td>&nbsp;</td>";
      cellCount++;
    }

    if(cellCount>=7){
      this.calHtml += "</tr><tr>";
      cellCount = 0;
    }

    for (var i = 1; i <=totalDays; i++) {
      if(cellCount>=7){
        this.calHtml += "</tr><tr>";
        cellCount = 0;
      }
      var active_date = "";


      if((new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()).getTime()) === (new Date(date.getFullYear(),date.getMonth(),i)).getTime()){
        active_date = "active";
      }
      this.calHtml += "<td class='"+ active_date +"'>"+ i +"</td>";
      cellCount ++;
    }

    var remCount = 7-cellCount;

    for (var i = 0; i < remCount; i++) {

      this.calHtml += "<td>&nbsp;</td>";
    }

    this.calHtml  += "</tr></tbody>";
  }

  this.setFooter = function () {
    this.calHtml += "</table>";
  }
}
if(document.getElementById("calendar")){
  var dateParam  = decodeURIComponent((new RegExp('[?|&]date=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  if(dateParam===null){
    var checkDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),1);
  }else{
    var tempDate = dateParam.split("-");
    var checkDate = new Date(tempDate[0],tempDate[1],tempDate[2]);
  }
  var myCal = new myCalendar(checkDate,"calendar");
  myCal.drawCalendar();
}else{
  document.write("Please make div element with id of calendar");
}
