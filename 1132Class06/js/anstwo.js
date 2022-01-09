const students = [
    ['1','najmul','masud mia','fatima begom','mirpur',55,77,81,88,67,91],
    ['2','hasan','rahaman ali','momena begom','dhanmoni',91,67,88,81,77,55],
    ['3','sobuj','kaji motaleb','juthi','mohammadpur',88,77,79,90,90,95],
    ['4','nafisa','ahosan talukdar','nahara','gulsan',55,77,81,23,44,31],
    ['5','nipa','khodokar khan','fulbanu','bonani',92,77,32,68,67,41],
];


function Main() {
    

        // gpa calculation
        this.gpa=(marks)=>{
    
            let gpa;
    
            if(marks>=0 && marks <=32){
                gpa = 0;
            }
            if(marks>=33 && marks <40){
                gpa = 1;
            }
            if(marks>=40 && marks <50){
                gpa = 2;
            }
            if(marks>=50 && marks <60){
                gpa = 3;
            }
            if(marks>=60 && marks <70){
                gpa = 3.5;
            }
            if(marks>=70 && marks <80){
                gpa = 4;
            }
            if(marks>=80 && marks <=100){
                gpa = 5;
            }
            return gpa;
        }
    
        // grade calculation
        this.grade=(marks)=>{
    
            let grade;
    
            if(marks>=0 && marks <=32){
                grade = 'F';
            }
            if(marks>=33 && marks <40){
                grade = 'D';
            }
            if(marks>=40 && marks <50){
                grade = 'C';
            }
            if(marks>=50 && marks <60){
                grade = 'B';
            }
            if(marks>=60 && marks <70){
                grade = 'A-';
            }
            if(marks>=70 && marks <80){
                grade = 'A';
            }
            if(marks>=80 && marks <=100){
                grade = 'A+';
            }
            return grade;
        }
    
        // cgpa calculation
        this.cgpa =(bangla,english,math,physics,chemistry,biology) =>{
    
            let total_gpa = ( bangla + english + math + physics + chemistry + biology);
            let cgpa =  total_gpa/6;
    
            if ( bangla == 0 || english == 0 || math == 0 || physics == 0 || chemistry == 0 || biology == 0){
    
                return " You Are Failed";
            }
            
            else{
                return` Your C-GPA : ${cgpa.toFixed(2)}`;
            }
        }
    
}
    

    let obj = new Main();
    for (let i = 0; i < students.length; i++) {
        console.log(`
        
            Student Name    :${students[i][1]}
            Student Roll    :${students[i][0]}
        
        
            Subject         Marks                               GPA                                       Grade 
        
            Bangla          :${students[i][5]}              ${obj.gpa(students[i][5])}                  ${obj.grade(students[i][5])}
            English         :${students[i][6]}              ${obj.gpa(students[i][6])}                  ${obj.grade(students[i][6])}
            Math            :${students[i][7]}              ${obj.gpa(students[i][7])}                  ${obj.grade(students[i][7])}
            Physics         :${students[i][8]}              ${obj.gpa(students[i][8])}                  ${obj.grade(students[i][8])}
            Chemistry       :${students[i][9]}              ${obj.gpa(students[i][9])}                  ${obj.grade(students[i][9])}
            Biology         :${students[i][10]}             ${obj.gpa(students[i][10])}                ${obj.grade(students[i][10])}
            ______________________________________________________________________________________________________________________
            cgpa = ${obj.cgpa(obj.gpa(students[i][5]),obj.gpa(students[i][6]),obj.gpa(students[i][7]),obj.gpa(students[i][8]),obj.gpa(students[i][9]),obj.gpa(students[i][10]))}
        `);
    }

