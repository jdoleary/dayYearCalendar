# dayYearCalendar
Calendar shows all days in a year at a glance.  Inspired by GitHub's "Contribution's Calendar".
![Day Year Calendar](/preview.PNG?raw=true "Screenshot")

# Usage
To use DayYearCalendar, simply import 
  * app/dist/DayYearCalendar.min.js
  * app/dist/DayYearCalendar.css
  * and jQuery
  
The following javascript will create an instance of DayYearCalendar, add a little data to it, and render it to the HTML body. See [Plain Import](/app/plainImport.html)
```javascript
    var dayYearCal = new DayYearCalendar();
    dayYearCal.renderHTML($('body'));

    var dateInformation = [
      {date:1448946000000,value:4},
      {date:1448686800000,value:3}
    ];
    dayYearCal.addColorData(dateInformation);
```

DayYearCalendar can also be required and built, see [Browserify Example](/app/src/js/usageExample.js).

If you have questions for how to compile the project or use it in your own, feel free to email me at jdoleary[at]gmail.com

# Build
At project root run
"npm install"
then
"npm run build"
Then import dayYearCal.css and usageExample.js in your html.
Open the html and you should see the calendar in all it's glory!
