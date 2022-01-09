    const students = [
        {
            roll        :1,
            name        :'najmul',
            fatherName  :'masud',
            motherName  :'fatima mia',
            location    :'mirpur',
            bangla      :55,
            english     :77,
            math        :81,
            physics     :88,
            chemistry   :67,
            biology     :91,
        },
        {
            roll        :2,
            name        :'hasan',
            fatherName  :'rahaman ali',
            motherName  :'momena ',
            location    :'dhanmoni',
            bangla      :91,
            english     :91,
            math        :67,
            physics     :88,
            chemistry   :81,
            biology     :55,
        },
        {
            roll        :3,
            name        :'sobuj',
            fatherName  :'kaji motaleb',
            motherName  :'juthi ',
            location    :'mohammadpur',
            bangla      :88,
            english     :77,
            math        :79,
            physics     :90,
            chemistry   :90,
            biology     :95,
        },
        {
            roll        :4,
            name        :'nafisa',
            fatherName  :'ahosan talukdar',
            motherName  :'nahara ',
            location    :'gulsan',
            bangla      :55,
            english     :77,
            math        :81,
            physics     :23,
            chemistry   :44,
            biology     :31,
        },
        {
            roll        :5,
            name        :'nipa',
            fatherName  :'khodokar khan',
            motherName  :'fulbanu ',
            location    :'bonani',
            bangla      :92,            
            english     :32,
            math        :68,
            physics     :67,
            chemistry   :41,
            biology     :41,
        },
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
        
            Student Name    :${students[i].name}
            Student Roll    :${students[i].roll}
        
        
            Subject         Marks                               GPA                                       Grade 
        
            Bangla          :${students[i].bangla}          ${obj.gpa(students[i].bangla)}                ${obj.grade(students[i].bangla)}
            English         :${students[i].english}         ${obj.gpa(students[i].english)}               ${obj.grade(students[i].english)}
            Math            :${students[i].math}            ${obj.gpa(students[i].math)}                  ${obj.grade(students[i].math)}
            Physics         :${students[i].physics}         ${obj.gpa(students[i].physics)}               ${obj.grade(students[i].physics)}
            Chemistry       :${students[i].chemistry}       ${obj.gpa(students[i].chemistry)}             ${obj.grade(students[i].chemistry)}
            Biology         :${students[i].biology}         ${obj.gpa(students[i].biology)}               ${obj.grade(students[i].biology)}
            ______________________________________________________________________________________________________________________
            cgpa = ${obj.cgpa(obj.gpa(students[i].bangla),obj.gpa(students[i].english),obj.gpa(students[i].math),obj.gpa(students[i].physics),obj.gpa(students[i].chemistry),obj.gpa(students[i].biology))}
        `);
    }