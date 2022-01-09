const lfwf = [
    ['najmul',22,'member','mirpur'],
    ['hasan',18,'member','mirpur'],
    ['sobuj',14,'member','mirpur'],
    ['prince',34,'staff','dhanmondi'],
    ['opu',25,'member','mirpur'],
    ['meheraz',55,'staff','uttora'],
    ['nipa',21,'member','samoli'],
    ['nafisa',20,'worker','mohammodpur'],
    ['akas',26,'staff','mohammodpur'],
    ['ratul',27,'manager','mohammodpur'],
    ['puja',33,'worker','dhanmondi'],
    ['rezaul',38,'manager','dhanmondi'],
    ['akib',30,'manager','dhanmondi'],
    ['abir',31,'member','kolabagan'],
    ['sneha',29,'member','gulsan'],
    ['asiq',26,'staff','farmgate'],
    ['hridoy',7,'member','savar'],
    ['biplob',32,'worker','thakurgaon'],
    ['riya',66,'guard','mirpur'],
    ['popi',17,'guard','mirpur'],
];
console.log('LFWF Club:');
console.log('============================================');


    for (let i = 0; i < lfwf.length; i++) {
        if (lfwf[i][1] <18) {
            lfwf[i].map(data => console.log(data));
            console.log('You are not old enough to join the club yet');
            console.log('============================================');
        }else if (lfwf[i][1]>=18 && lfwf[i][1]<40){
            lfwf[i].map(data => console.log(data));
            console.log('Most welcome.You are perfect in our club.');
            console.log('============================================');
        }else if (lfwf[i][1]>=40 && lfwf[i][1]<=100){
            lfwf[i].map(data => console.log(data));
            console.log('Greetings to you. To stay with us for so many days');
            console.log('============================================');
        }
        
    }