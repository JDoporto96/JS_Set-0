//Ch7 Ex2
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
var usHollidays={
    "01-01":"New Year's Day",
    "02-14":"Valentine's Day",
    "03-08":"Women's Day",
    "03-17":"St Patrick's Day",
    "03-27":"Easter",
    "04-01":"April Fools'",
    "04-22":"Earth Day",
    "05-30":"Memorial Day",
    "06-19":"Flag Day",
    "07-04":"Independence Day",
    "09-05":"Labor's Day",
    "10-31":"Halloween",
    "11-24":"Thanksgiving",
    "12-24":"Christmas Eve",
    "12-25":"Christmas"}

var jpnHollidays={
   "01-01":"Japanese New Year",
   "01-10":"Coming of Age Day",
   "02-11":"National Foundation Day",
   "02-23":"Emperor's Birthday",
   "03-21":"Vernal Equinox",
   "04-29":"Showa Day",
   "05-03":"Constitution Memorial Day",
   "08-11":"Mountain Day",
   "09-23":"Autummal Equinox",
   "11-03":"Culture Day",
   "11-23":"Labor Thanksgiving"} 




function usaToJpn(date){
    validDate=/^[01]\d\/[0-3]\d\/[12]\d{3}$/;
    if(validDate.test(date)){
        regexp=/\d\d/g;
        var pairs = date.match(regexp);
        var month= pairs[0];
        var day = pairs[1];
        var year = pairs[2] + pairs[3];
        var monthDay=month+"-"+day;
        var holliday ="";
        if(jpnHollidays[monthDay]){
            holliday=jpnHollidays[monthDay];
            
        }
        else{
            holliday ="Not a holliday";
        }
        var jpnDate = "Japanese-JPN: "+year+'/'+month+'/'+day+"  ("+holliday+")";
        console.log(jpnDate);
    }
    else{
        throw "Invalid date format"
    }
}

function jpnToUsa(date){
    validDate=/^[12]\d{3}\/[01]\d\/[0-3]\d$/;
    if(validDate.test(date)){
        regexp=/\d\d/g;
        var pairs = date.match(regexp);
        var year = pairs[0] + pairs[1];
        var month= pairs[2];
        var day = pairs[3];
        var monthDay=month+"-"+day;
        var holliday="";
        if(usHollidays[monthDay]){
            holliday=usHollidays[monthDay];
            
        }
        else{
            holliday ="Not a holliday";
        }
        var usaDate = "English-US: "+month+'/'+day+'/'+year+"  ("+holliday+")";
        console.log(usaDate);
    }
    else{
        throw "Invalid date format"
    }
}
usaToJpn("01/01/2022");
jpnToUsa("2022/07/04");