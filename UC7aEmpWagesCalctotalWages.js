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
