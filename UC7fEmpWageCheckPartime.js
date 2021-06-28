let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyMegaArr = new Array();
let empDailyMegaMap = new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random()*10)%3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
   empDailyMegaArr.push(CalcDailyMega(empHrs));
   empDailyHrsMap.set(totalWorkingDays, empHrs);
   empDailyMegaMap.set(totalWorkingDays, CalcDailyMega(empHrs));
}
let empWage = CalcDailyMega(totalEmpHrs);
console.log("TotalDays:"+" "+totalWorkingDays+" "+"Total Hrs :"+" "+totalEmpHrs+" "+"Employee Wages is: "+" "+empWage);

//Array Helped function//
//UC7a//
let totWages = 0;
function sum(dailyWage){
    totWages += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7a - Tatoal Days"+totalWorkingDays+"total Hrs"+totalEmpHrs+"EmpWages"+totWages);
function totalWages(totalWages,dailyWage){
    return totalWages+dailyWage;
}
console.log("UC7A emp wage with reduce"+empDailyWageArr.reduce(totalWages,0));

//UC7B//
let dailyCntr = 0;
function mapDayWithWage(){
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily wage map");
console.log(mapDayWithWageArr);

//UC7C//
function fullTimeWage(dailyWage){
    return dailyWage.include('160');
}
let fullDayWageArr = mapDayWithMegaArr.filter(fullTimeWage);
console.log("UC7 C daily wages fillter when full time wage earned..!");
console.log(fullDayWageArr);
////UC7d//
function findFulltimeWage(dailyWage){
    return dailyWage.include('160'); 
}
console.log("UC7 d first time fulltime wage was earned on day"+" "+mapDayWithWageArr.findFulltimeWage);

//UC7 e//
function isAllFullTimeWage(dailyWage){
    return dailyWage.include('160'); 
}
console.log("UC7 e check all elements is full time wages"+" "+fullDayWageArr.every(isAllFullTimeWage));

//UC7 f//
function isAnyPartTimeWage(dailyWage){
    return dailyWage.include('80'); 
}
console.log("UC7 e check if any part time wages "+ mapDayWithWageArr.some(isAnyPartTimeWage));
