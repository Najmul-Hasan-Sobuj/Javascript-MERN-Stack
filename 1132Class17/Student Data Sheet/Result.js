function Result() {
    this.result = function (marks) {
      let gpa;
      let gread;
  
      if (marks >= 0 && marks < 33) {
        gpa = 0;
        gread = 'F';
      } else if (marks >= 33 && marks < 40) {
        gpa = 1;
        gread = 'D';
      } else if (marks >= 40 && marks < 50) {
        gpa = 2;
        gread = 'C';
      } else if (marks >= 50 && marks < 60) {
        gpa = 3;
        gread = 'B';
      } else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
        gread = 'A-';
      } else if (marks >= 70 && marks < 80) {
        gpa = 4;
        gread = 'A';
      } else if (marks >= 80 && marks <= 100) {
        gpa = 5;
        gread = 'A+';
      } else {
        gpa = 'invalid';
        gread = 'invalid';
      }
  
      return {
        gpacal: gpa,
        greadcal: gread
      };
    }
  
    this.finalCgpa = function (bn, en, math, sciance, socialscince, rel) {
      let totalgpa =
        this.result(bn).gpacal +
        this.result(en).gpacal +
        this.result(math).gpacal +
        this.result(sciance).gpacal +
        this.result(socialscince).gpacal +
        this.result(rel).gpacal;
  
      let finalscgpa = totalgpa / 6;
  
      if (
        bn < 33 || en < 33 || math < 33 || sciance < 33 || socialscince < 33 ||
        rel < 33){
        finalscgpa = 0;
        finalgread = "F";
      }else if(finalscgpa >=  1 && finalscgpa < 2){

        finalgread = "D";
      }else if(finalscgpa >= 2 && finalscgpa < 3){
   
        finalgread = "C";
      }else if(finalscgpa >=  3 && finalscgpa < 3.5){
  
        finalgread = "B";
      }else if(finalscgpa >=  3.5 && finalscgpa < 4){
  
        finalgread = "A-";
      }else if(finalscgpa >= 4 && finalscgpa < 5){
 
        finalgread = "A";
      }else if(finalscgpa ==  5){
   
        finalgread = "A+";
      }
  
      return{
        rescgpa : finalscgpa == 0 ? '' : finalscgpa.toFixed(2) ,
        resgread : finalgread,
      }
    };
  }
  