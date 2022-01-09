let name = prompt( "Enter Your Name :");
let roll = prompt("Enter Your Roll Number:")


let bangla = parseInt(prompt("Please Input your Bangla Mark: "));
let english = parseInt(prompt("Please Input your English Mark: "));
let math = parseInt(prompt("Please Input your Math Mark: "));
let physics = parseInt(prompt("Please Input your Physics Mark: "));
let chemistry = parseInt(prompt("Please Input your Chemistry Mark: "));
let biology = parseInt(prompt("Please Input your Biology Mark: "));
let religion = parseInt(prompt("Please Input your Religion Mark: "));
let global_studies = parseInt(prompt("Please Input your Global studies Mark: "));

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
    this.cgpa =(bangla,english,math,physics,chemistry,biology,religion,global_studies) =>{

        let total_gpa = ( bangla + english + math + physics + chemistry + biology + religion + global_studies);
        let cgpa = total_gpa/8;

        if ( bangla == 0 || english == 0 || math == 0 || physics == 0 || chemistry == 0 || biology == 0 ||  religion == 0 || global_studies == 0){

            return " You Are Failed"
        }
        
        else{
            return` Your C-GPA : ${cgpa}`;
        }
    }
}

let obj = new Main();

    console.log(`

        Student Name   : ${name}
        Student Roll   : ${roll}


        Subject        Marks                  GPA                               Grade 

        Bangla        :${bangla}              ${obj.gpa(bangla)}                ${obj.grade(bangla)}
        English       :${english}             ${obj.gpa(english)}               ${obj.grade(english)}
        Math          :${math}                ${obj.gpa(math)}                  ${obj.grade(math)}
        Physics       :${physics}             ${obj.gpa(physics)}               ${obj.grade(physics)}
        Chemistry     :${chemistry}           ${obj.gpa(chemistry)}             ${obj.grade(chemistry)}
        Biology       :${biology}             ${obj.gpa(biology)}               ${obj.grade(biology)}
        Religion      :${religion}            ${obj.gpa(religion)}              ${obj.grade(religion)}
        Global studies:${global_studies}      ${obj.gpa(global_studies)}        ${obj.grade(global_studies)}
        ____________________________________________________________________________________________________________________________
                            cgpa = ${obj.cgpa(obj.gpa(bangla),obj.gpa(english),obj.gpa(math),obj.gpa(physics),obj.gpa(chemistry),obj.gpa(biology),obj.gpa(religion),obj.gpa(global_studies))}
    `);


