// Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students.
let skill = prompt('Enter skills Name:');

const developers = [
    {
        name        : 'najmul',
        age         :22,
        skills      :'laravel',
        location    :'mirpur',
        ammount     :50000,
    },
    {
        name        : 'hasan',
        age         :23,
        skills      :'laravel',
        location    :'mirpur',
        ammount     :10000,
    },
    {
        name        : 'sobuj',
        age         :24,
        skills      :'laravel',
        location    :'mirpur',
        ammount     :20000,
    },
    {
        name        : 'prince',
        age         :24,
        skills      :'django',
        location    :'dhanmondi',
        ammount     :25000,
    },
    {
        name        : 'opu',
        age         :25,
        skills      :'laravel',
        location    :'mirpur',
        ammount     :30000,
    },
    {
        name        : 'meheraz',
        age         :25,
        skills      :'django',
        location    :'uttora',
        ammount     :12000,
    },
    {
        name        : 'nipa',
        age         :21,
        skills      :'laravel',
        location    :'samoli',
        ammount     :5000,
    },
    {
        name        : 'nafisa',
        age         :20,
        skills      :'wordpress',
        location    :'mohammodpur',
        ammount     :100000,
    },
    {
        name        : 'akas',
        age         :26,
        skills      :'django',
        location    :'mohammodpur',
        ammount     :55000,
    },
    {
        name        : 'ratul',
        age         :27,
        skills      :'golang',
        location    :'mohammodpur',
        ammount     :60000,
    },
    {
        name        : 'puja',
        age         :21,
        skills      :'wordpress',
        location    :'dhanmondi',
        ammount     :70000,
    },
    {
        name        : 'rezaul',
        age         :28,
        skills      :'golang',
        location    :'dhanmondi',
        ammount     :80000,
    },
    {
        name        : 'akib',
        age         :30,
        skills      :'golang',
        location    :'dhanmondi',
        ammount     :90000,
    },
    {
        name        : 'abir',
        age         :19,
        skills      :'laravel',
        location    :'kolabagan',
        ammount     :77000,
    },
    {
        name        : 'sneha',
        age         :18,
        skills      :'laravel',
        location    :'gulsan',
        ammount     :35000,
    },
    {
        name        : 'asiq',
        age         :26,
        skills      :'django',
        location    :'farmgate',
        ammount     :28000,
    },
    {
        name        : 'hridoy',
        age         :31,
        skills      :'laravel',
        location    :'savar',
        ammount     :20000,
    },
    {
        name        : 'biplob',
        age         :32,
        skills      :'wordpress',
        location    :'thakurgaon',
        ammount     :15000,
    },
    {
        name        : 'riya',
        age         :35,
        skills      :'java',
        location    :'mirpur',
        ammount     :10000,
    },
    {
        name        : 'popi',
        age         :37,
        skills      :'java',
        location    :'mirpur',
        ammount     :20000,
    },
];

var totolIncomes = 0;
for (let i = 0; i < developers.length; i++) {
    if (developers[i].skills == skill) {
        console.log(`
            name    : ${developers[i].name}
            age     : ${developers[i].age}
            skills     : ${developers[i].skills}
            location     : ${developers[i].location}
            ammount     : ${developers[i].ammount}
        
        `);
    }
    totolIncomes += Number(developers[i].ammount);
}
console.log(`All Developers Income: ${totolIncomes} taka`);