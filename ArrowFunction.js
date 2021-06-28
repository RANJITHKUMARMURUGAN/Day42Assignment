let count =0;
let totalHours = Array.from(empDailyHrsMap.values().reduce(findTotal,0));
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("UC9 - EMP wage with Arrow: " + "Total Hour:" + totalHours+"totalWages:"+totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key,map)=>{
    if(value==8) fullWorkingDays.push(key);
    else if(value==4)partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days:" +fullWorkingDays);
console.log("Part Working Days:" +partWorkingDays);
console.log("Non Working Days:" +nonWorkingDays);
