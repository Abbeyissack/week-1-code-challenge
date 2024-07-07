# week-1-code-challenge
repository for week 1 toy problems assignment 
This repository contains solutions for three week 1 toy problems code Challenge: Student Grade Generator, Speed Detector, and Net Salary Calculator. I used the problem to solve using JavaScript.

Challenge 1 Student Grade Generator
Challenge 2 Speed Detector
Challenge 3 Net Salary Calculator
Challenge 1 Grade Generator
This project contains a function that prompts the user to input student marks and generates the corresponding grade based on the marks. The marks should be between 0 and 100, and the grades are assigned as follows:

A: Marks > 79 B: 60 to 79 C: 50 to 59 D: 40 to 49 E: Marks < 40

function studentGradeGenerator(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';

}
This program takes the speed of a car as input and determines whether the speed is within the limit or if the driver should receive demerit points.

Speed Criteria
Speed <= 70: "Ok"
For every 5 km/s above 70: 1 demerit point
Points > 12: "License suspended"

Challenge 3: Net Salary Calculator
This program calculates an individual’s net salary by taking into account the basic salary and benefits. It calculates the PAYE (Tax), NHIF deductions, NSSF deductions, gross salary, and net salary.

Inputs
Basic Salary: The base salary of the individual.
Benefits: Additional benefits provided to the individual.
Outputs
Gross Salary: The total salary before any deductions. Calculated as the sum of basic salary and benefits.
PAYE (Tax): Income tax based on the gross salary.
NHIF Deductions: Health insurance deductions based on the gross salary.
NSSF Deductions: Pension contributions based on the gross salary.
Net Salary: The total salary after all deductions.
Detailed Breakdown
Gross Salary Calculation
The gross salary is the sum of the basic salary and any benefits:

const grossSalary = basicSalary + benefits;
