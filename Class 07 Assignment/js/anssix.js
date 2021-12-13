// Create data in a student array and object  where there will be data of about 50 people and print data of Mirpur and Banani residents starting from there

const students = [
    {
        id          :1,
        name        : 'najmul',
        age         :22,
        location    :'mirpur',
    },
    {
        id          :2,
        name        : 'hasan',
        age         :23,
        location    :'mirpur',
    },
    {
        id          :3,
        name        : 'sobuj',
        age         :24,
        location    :'mirpur',
    },
    {
        id          :4,
        name        : 'prince',
        age         :24,
        location    :'dhanmondi',
    },
    {
        id          :5,
        name        : 'opu',
        age         :25,
        location    :'mirpur',
    },
    {
        id          :6,
        name        : 'meheraz',
        age         :25,
        location    :'uttora',
    },
    {
        id          :7,
        name        : 'nipa',
        age         :21,
        location    :'samoli',
    },
    {
        id          :8,
        name        : 'nafisa',
        age         :20,
        location    :'mohammodpur',
    },
    {
        id          :9,
        name        : 'akas',
        age         :26,
        location    :'mohammodpur',
    },
    {
        id          :10,
        name        : 'ratul',
        age         :27,
        location    :'mohammodpur',
    },
    {
        id          :11,
        name        : 'puja',
        age         :21,
        location    :'dhanmondi',
    },
    {
        id          :12,
        name        : 'rezaul',
        age         :28,
        location    :'dhanmondi',
    },
    {
        id          :13,
        name        : 'akib',
        age         :30,
        location    :'dhanmondi',
    },
    {
        id          :14,
        name        : 'abir',
        age         :19,
        location    :'kolabagan',
    },
    {
        id          :15,
        name        : 'sneha',
        age         :18,
        location    :'gulsan',
    },
    {
        id          :16,
        name        : 'asiq',
        age         :26,
        location    :'farmgate',
    },
    {
        id          :17,
        name        : 'hridoy',
        age         :31,
        location    :'savar',
    },
    {
        id          :18,
        name        : 'biplob',
        age         :32,
        location    :'thakurgaon',
    },
    {
        id          :19,
        name        : 'riya',
        age         :35,
        location    :'mirpur',
    },
    {
        id          :20,
        name        : 'popi',
        age         :37,
        location    :'mirpur',
    },
    {
        id          :21,
        name        : 'rohim',
        age         :22,
        location    :'mirpur',
    },
    {
        id          :22,
        name        : 'masum',
        age         :23,
        location    :'mirpur',
    },
    {
        id          :23,
        name        : 'ali',
        age         :24,
        location    :'mirpur',
    },
    {
        id          :24,
        name        : 'siam',
        age         :24,
        location    :'dhanmondi',
    },
    {
        id          :25,
        name        : 'nahid',
        age         :25,
        location    :'banani',
    },
    {
        id          :26,
        name        : 'mukta',
        age         :25,
        location    :'uttora',
    },
    {
        id          :27,
        name        : 'kazi',
        age         :21,
        location    :'banani',
    },
    {
        id          :28,
        name        : 'aornob',
        age         :20,
        location    :'mohammodpur',
    },
    {
        id          :29,
        name        : 'saif',
        age         :26,
        location    :'mohammodpur',
    },
    {
        id          :30,
        name        : 'bindu',
        age         :27,
        location    :'banani',
    },
    {
        id          :31,
        name        : 'sumona',
        age         :21,
        location    :'banani',
    },
    {
        id          :32,
        name        : 'ratri',
        age         :28,
        location    :'dhanmondi',
    },
    {
        id          :33,
        name        : 'polas',
        age         :30,
        location    :'dhanmondi',
    },
    {
        id          :34,
        name        : 'asif',
        age         :19,
        location    :'banani',
    },
    {
        id          :35,
        name        : 'nehal',
        age         :18,
        location    :'banani',
    },
    {
        id          :36,
        name        : 'kabila',
        age         :26,
        location    :'farmgate',
    },
    {
        id          :37,
        name        : 'bijoy',
        age         :31,
        location    :'savar',
    },
    {
        id          :38,
        name        : 'farhan',
        age         :32,
        location    :'banani',
    },
    {
        id          :39,
        name        : 'mow',
        age         :35,
        location    :'banani',
    },
    {
        id          :40,
        name        : 'bindu',
        age         :37,
        location    :'mirpur',
    },
    {
        id          :31,
        name        : 'rahat',
        age         :21,
        location    :'dhanmondi',
    },
    {
        id          :42,
        name        : 'fahad',
        age         :28,
        location    :'banani',
    },
    {
        id          :43,
        name        : 'kumar',
        age         :30,
        location    :'dhanmondi',
    },
    {
        id          :44,
        name        : 'rozob',
        age         :19,
        location    :'kolabagan',
    },
    {
        id          :45,
        name        : 'rahi',
        age         :18,
        location    :'banani',
    },
    {
        id          :46,
        name        : 'misu',
        age         :26,
        location    :'farmgate',
    },
    {
        id          :47,
        name        : 'sifat',
        age         :31,
        location    :'banani',
    },
    {
        id          :48,
        name        : 'durjoy',
        age         :32,
        location    :'thakurgaon',
    },
    {
        id          :49,
        name        : 'ahadi',
        age         :35,
        location    :'banani',
    },
    {
        id          :50,
        name        : 'sumi',
        age         :37,
        location    :'banani',
    },
];

for (let i = 0; i < students.length; i++) {
    if (students[i].location == 'mirpur' || students[i].location == 'banani') {
        console.log(`
            id    : ${students[i].id}
            name     : ${students[i].name}
            age     : ${students[i].age}
            location     : ${students[i].location}
        `);
    }
}