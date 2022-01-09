
let skills = prompt('Enter skills Name:');
const developers = [
    ['najmul',22,'laravel','mirpur',50000],
    ['hasan',23,'laravel','mirpur',10000],
    ['sobuj',24,'laravel','mirpur',20000],
    ['prince',24,'django','dhanmondi',25000],
    ['opu',25,'laravel','mirpur',30000],
    ['meheraz',25,'django','uttora',12000],
    ['nipa',21,'laravel','samoli',5000],
    ['nafisa',20,'wordpress','mohammodpur',100000],
    ['akas',26,'django','mohammodpur',55000],
    ['ratul',27,'golang','mohammodpur',60000],
    ['puja',21,'wordpress','dhanmondi',70000],
    ['rezaul',28,'golang','dhanmondi',80000],
    ['akib',30,'golang','dhanmondi',90000],
    ['abir',19,'laravel','kolabagan',77000],
    ['sneha',18,'laravel','gulsan',35000],
    ['asiq',26,'django','farmgate',28000],
    ['hridoy',31,'laravel','savar',20000],
    ['biplob',32,'wordpress','thakurgaon',15000],
    ['riya',35,'java','mirpur',10000],
    ['popi',37,'java','mirpur',20000],
];

var totolIncomes = 0;
console.log(`All ${skills} Developers:`);

for (let i = 0; i < developers.length; i++) {
    if (developers[i][2] == skills) {
        developers[i].map( value => console.log(value));
        console.log('==============================');
    }
    totolIncomes += Number(developers[i][4]);
}
console.log(`All Developers Income: ${totolIncomes} taka`);