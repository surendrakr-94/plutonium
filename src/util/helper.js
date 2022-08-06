const printDate=function(){
    let currentdate= new Date();
    console.log("Current Date : " + currentdate)
}
module.exports.date=printDate;

const printMonth =function (){
    let currentdate= new Date();
    let currentmonth = currentdate.getMonth()+1;
    console.log("Current Month : " + currentmonth)
}
module.exports.month=printMonth;

const batchInfo=function  (){
    console.log("plutonium Week 3rd Day of 5th,the topic for today is Node.js module System")
}
module.exports.batch=batchInfo;