var basic_salary=prompt("Enter your basic salary");
var NHIF=prompt("Enter the NHIF deducted");
var NSSF=prompt("Enter the NSSF deducted");
var Gross_salary=parseInt(basic_salary) + parseInt(NHIF) + parseInt(NSSF);
//percentage of tax deducted from your salary
var Tax=Gross_salary *0.3;
var net_income=Gross_salary - Tax;

//Display the results after input has been entered
document.write("<br>Your Gross_salary is\t "+net_income);
document.write("<br>Your Net income is "+net_income);
document.write("<br>Your Tax deducted from gross salary is "+tax);

        