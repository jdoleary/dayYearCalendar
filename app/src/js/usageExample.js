var dayYearCal = require('./dayYearCal');
dayYearCal = new dayYearCal();
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