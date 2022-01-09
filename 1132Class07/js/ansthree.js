


    // Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive

    const lfwf = [
        {
            name    : 'najmul' ,
            age     : 22,
            position    : 'member',
            location: 'mirpur',
        },
        {
            name    : 'hasan' ,
            age     : 18,
            position    : 'member',
            location: 'mirpur',
        },
        {
            name    : 'sobuj' ,
            age     : 14,
            position    : 'member',
            location: 'mirpur',
        },
        {
            name    : 'prince' ,
            age     : 34,
            position    : 'staff',
            location: 'dhanmondi',
        },
        {
            name    : 'opu' ,
            age     : 25,
            position    : 'member',
            location: 'mirpur',
        },
        {
            name    : 'meheraz' ,
            age     : 55,
            position    : 'staff',
            location: 'uttora',
        },
        {
            name    : 'nipa' ,
            age     : 21,
            position    : 'member',
            location: 'samoli',
        },
        {
            name    : 'nafisa' ,
            age     : 20,
            position    : 'worker',
            location: 'mohammodpur',
        },
        {
            name    : 'akas' ,
            age     : 26,
            position    : 'staff',
            location: 'mohammodpur',
        },
        {
            name    : 'ratul' ,
            age     : 27,
            position    : 'manager',
            location: 'mohammodpur',
        },
        {
            name    : 'puja' ,
            age     : 33,
            position    : 'worker',
            location: 'dhanmondi',
        },
        {
            name    : 'rezaul' ,
            age     : 38,
            position    : 'manager',
            location: 'dhanmondi',
        },
        {
            name    : 'akib' ,
            age     : 30,
            position    : 'manager',
            location: 'dhanmondi',
        },
        {
            name    : 'abir' ,
            age     : 31,
            position    : 'member',
            location: 'kolabagan',
        },
        {
            name    : 'sneha' ,
            age     : 29,
            position    : 'member',
            location: 'gulsan',
        },
        {
            name    : 'asiq' ,
            age     : 26,
            position    : 'staff',
            location: 'farmgate',
        },
        {
            name    : 'hridoy' ,
            age     : 7,
            position    : 'member',
            location: 'savar',
        },
        {
            name    : 'biplob' ,
            age     : 32,
            position    : 'worker',
            location: 'thakurgaon',
        },
        {
            name    : 'riya' ,
            age     : 66,
            position    : 'guard',
            location: 'mirpur',
        },
        {
            name    : 'popi' ,
            age     : 17,
            position    : 'guard',
            location: 'mirpur',
        },
    ];

    console.log('LFWF Club:');
console.log('============================================');


    for (let i = 0; i < lfwf.length; i++) {
        if (lfwf[i].age <18) {
            console.log(`
                name: ${lfwf[i].name}
                name: ${lfwf[i].age}
                name: ${lfwf[i].position}
                name: ${lfwf[i].location}
            `);
            console.log('You are not old enough to join the club yet');
            console.log('============================================');
        }else if (lfwf[i].age>=18 && lfwf[i].age<40){
            console.log(`
                name: ${lfwf[i].name}
                name: ${lfwf[i].age}
                name: ${lfwf[i].position}
                name: ${lfwf[i].location}
            `);
            console.log('Most welcome.You are perfect in our club.');
            console.log('============================================');
        }else if (lfwf[i].age>=40 && lfwf[i].age<=100){
            console.log(`
                name: ${lfwf[i].name}
                name: ${lfwf[i].age}
                name: ${lfwf[i].position}
                name: ${lfwf[i].location}
            `);
            console.log('Greetings to you. To stay with us for so many days');
            console.log('============================================');
        }
        
    }