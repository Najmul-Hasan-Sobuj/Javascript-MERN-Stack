// Create fees array and object data for a picnic where everyone will provide free basic information for everyone.


const picknic = [
    {
        id          :1,
        name        : 'najmul',
        age         :22,
        location    :'mirpur',
        fee         :5000,
    },
    {
        id          :2,
        name        : 'hasan',
        age         :23,
        location    :'mirpur',
        fee         :5000,
    },
    {
        id          :3,
        name        : 'sobuj',
        age         :24,
        location    :'mirpur',
        fee         :5000,
    },
    {
        id          :4,
        name        : 'prince',
        age         :24,
        location    :'dhanmondi',
        fee         :5000,
    },
    {
        id          :5,
        name        : 'opu',
        age         :25,
        location    :'mirpur',
        fee         :5000,
    },
    {
        id          :6,
        name        : 'meheraz',
        age         :25,
        location    :'uttora',
        fee         :5000,
    },
    {
        id          :7,
        name        : 'nipa',
        age         :21,
        location    :'samoli',
        fee         :5000,
    },
    {
        id          :8,
        name        : 'nafisa',
        age         :20,
        location    :'mohammodpur',
        fee         :5000,
    },
    {
        id          :9,
        name        : 'akas',
        age         :26,
        location    :'mohammodpur',
        fee         :5000,
    },
    {
        id          :10,
        name        : 'ratul',
        age         :27,
        location    :'mohammodpur',
        fee         :5000,
    },
    {
        id          :11,
        name        : 'puja',
        age         :21,
        location    :'dhanmondi',
        fee         :5000,
    },
    {
        id          :12,
        name        : 'rezaul',
        age         :28,
        location    :'dhanmondi',
        fee         :5000,
    },
    {
        id          :13,
        name        : 'akib',
        age         :30,
        location    :'dhanmondi',
        fee         :5000,
    },
    {
        id          :14,
        name        : 'abir',
        age         :19,
        location    :'kolabagan',
        fee         :5000,
    },
    {
        id          :15,
        name        : 'sneha',
        age         :18,
        location    :'gulsan',
        fee         :5000,
    },
    {
        id          :16,
        name        : 'asiq',
        age         :26,
        location    :'farmgate',
        fee         :5000,
    },
    {
        id          :17,
        name        : 'hridoy',
        age         :31,
        location    :'savar',
        fee         :5000,
    },
    {
        id          :18,
        name        : 'biplob',
        age         :32,
        location    :'thakurgaon',
        fee         :5000,
    },
    {
        id          :19,
        name        : 'riya',
        age         :35,
        location    :'mirpur',
        fee         :5000,
    },
    {
        id          :20,
        name        : 'popi',
        age         :37,
        location    :'mirpur',
        fee         :5000,
    },
];

var totolFee = 0;
for (let i = 0; i < picknic.length; i++) {
        console.log(`
            id      : ${picknic[i].id}
            name         : ${picknic[i].name}
            age      : ${picknic[i].age}
            location         : ${picknic[i].location}
            fee      : ${picknic[i].fee}
        
        `);
        totolFee += Number(picknic[i].fee);
}
console.log(`picknic ammount: ${totolFee} taka`);