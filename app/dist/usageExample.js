(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** 
 * DayYearCalendar.js - v1.0.1 - 2015-12-02
 * http://www.nestfall.com
 * Copyright (c) 2015 Jordan O'Leary
 * Licensed under the ISC license 
 */
(function(window, document, exportName, undefined) {
  
function DayYearCalendar(){
  this.daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  this.date = new Date();
  this.dateSquares = {};
  this.thresholds = {
    low: 0,
    med: 3,
    high: 6,
    'very-high': 9
  };
};
DayYearCalendar.prototype = {
  // in:
  renderHTML: function($container){
    var $html = $('<div class="day-year-cal-holder"> <div class="day-of-the-week-holder">   <div id="MonthLabelHolder" class="day-of-the-week">     <div class="square label"> </div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">   <div id="Sunday" class="day-of-the-week">     <div class="square label">S</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">   <div id="Monday" class="day-of-the-week">     <div class="square label">M</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">    <div id="Tuesday" class="day-of-the-week">     <div class="square label">T</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">    <div id="Wednesday" class="day-of-the-week">     <div class="square label">W</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">    <div id="Thursday" class="day-of-the-week">     <div class="square label">T</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">    <div id="Friday" class="day-of-the-week">     <div class="square label">F</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div> <div class="day-of-the-week-holder">    <div id="Saturday" class="day-of-the-week">     <div class="square label">S</div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>     <div class="square no-data"></div>   </div> </div>  <div class="info"></div> </div>');
    $container.append($html);
    this.setup();
    
    $('.day-year-cal-holder .square').mouseover(function() {
      $('.day-year-cal-holder .info').html($(this).data('date'));
    });
    
  },
  setup: function(){
    var todayDayOfWeek = this.daysOfTheWeek[this.date.getDay()];
    $('.day-year-cal-holder div#' + todayDayOfWeek).children().last().addClass('today');
    //Hide others:
    var otherDays = this.daysOfTheWeek.slice(this.date.getDay() + 1);
    for (var i = 0; i < otherDays.length; i++) {
      $('.day-year-cal-holder div#' + otherDays[i]).children().last().hide();
    }
    // Give all divs date info:
    var i;
    for (i = 0; i < 375; i++) {
      var div = this.getDivForDaysAgo(i);
      var today = new Date();
      var daysDate = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getDate());
      daysDate.setDate(daysDate.getDate() - i);
      this.dateSquares[daysDate.getTime()] = div;
      div.data('date', daysDate);
      if (i >= 365) {
        div.css({
          'background-color': 'white'
        });
      }
      // Check if month marker:
      if (daysDate.getDate() == 1) {
        // If first of month:
        var month = this.months[daysDate.getMonth()];
        // Add month markers:
        $($('.day-year-cal-holder #MonthLabelHolder').children().get(div.index())).html(month);

      }
    }
    
  },
  getDivForDaysAgo: function(daysAgo){
    var dayOfWeekIndex = (this.date.getDay() - daysAgo) % 7;
    if (dayOfWeekIndex < 0) {
      dayOfWeekIndex += 7;
    }
    var dayOfWeek = this.daysOfTheWeek[dayOfWeekIndex];
    if (daysAgo <= this.date.getDay()) {
      dayOfWeek = this.daysOfTheWeek[this.date.getDay() - daysAgo];
    }

    var weeksAgo = 0;
    if (daysAgo >= this.date.getDay()) {
      weeksAgo = Math.floor((daysAgo - (this.date.getDay() + 1)) / 7) + 1;
    }
    console.log(daysAgo + " : " + dayOfWeek + ", weeks ago: " + weeksAgo);

    var remainder = daysAgo % 7;
    var children = $('.day-year-cal-holder #' + dayOfWeek).children();
    var day = $(children[children.length - 1 - weeksAgo]);
    return day;
    
  },
  addColorData: function(data){
    for (var i = 0; i < data.length; i++) {
      var value = data[i].value;
      var newClass = '';
      if (value > this.thresholds.low) {
        newClass = 'low';
      }
      if (value > this.thresholds.med) {
        newClass = 'med';
      }
      if (value > this.thresholds.high) {
        newClass = 'high';
      }
      if (value > this.thresholds['very-high']) {
        newClass = 'very-high';
      }
      $(this.dateSquares[data[i].date.getTime()]).addClass(newClass);
    }
    
  }
}



  if (typeof define == 'function' && define.amd) {
      define(function() {
          return DayYearCalendar;
      });
  } else if (typeof module != 'undefined' && module.exports) {
      module.exports = DayYearCalendar;
  } else {
      window[exportName] = DayYearCalendar;
  }

})(window, document, 'DayYearCalendar');
},{}],2:[function(require,module,exports){
var DayYearCalendar = require('./DayYearCalendar');
dayYearCal = new DayYearCalendar();
dayYearCal.renderHTML($('.dayYearCalendar'));

/**
 * Add data to calendar:
 * Data should be in the format:
 * var data = [
 *  {date:1448946000000,value:4},
 *  {date:1448686800000,value:3}
 * ];
 */
var showData = [];
for (i = 0; i < 375; i++) {
  var today = new Date();
  var daysDate = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getDate());
  daysDate.setDate(daysDate.getDate() - i);
  showData.push({date:daysDate,value:Math.random()*17-6});
}
dayYearCal.addColorData(showData);
},{"./DayYearCalendar":1}]},{},[2]);
