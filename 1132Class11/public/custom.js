// 1. Load all Developers in DOM form object Data (start)
const developers = [
    {
        name        : 'najmul',
        skills      :'laravel',
        photo      :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AhfRrQm3WhrkFJI3SQOxf_GZKRxm7jD_nJmXdRtK6mZSum_d_XE31p_ZIh0Y1Cnd_7E&usqp=CAU',
    },
    {
        name        : 'hasan',
        skills      :'laravel',
        photo      :'https://thumbs.dreamstime.com/b/handsome-young-man-serious-portrait-handsome-young-man-serious-portrait-white-background-111594200.jpg',
    },
    {
        name        : 'sobuj',
        skills      :'laravel',
        photo      :'https://images.squarespace-cdn.com/content/v1/54ff160de4b0a76e3a90696a/1562150296188-4XEX3JKWVO9CJX5I4UOO/us+American+passport+visa+photo+bath',
    },
    {
        name        : 'prince',
        skills      :'django',
        photo      :'https://s3.ivisa.com/website-assets/blog/id-photo2.jpg',
    },
    {
        name        : 'opu',
        skills      :'laravel',
        photo      :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvfyJVK5W8c_3M-f3IF8rURvueftVdeJI2CvbPS9IGH45pox7w2YcVrfBQqGkTL7l_xg&usqp=CAU',
    },
    {
        name        : 'meheraz',
        skills      :'django',
        photo      :'https://image.shutterstock.com/image-photo/passport-photo-cute-well-dressed-260nw-1816206689.jpg',
    }
];
const card_columns = document.querySelector('.card-columns');

developers.forEach(element => {
    card_columns.innerHTML += `
    <div class="card">
        <img class="card-img-top" src="${element.photo}" alt="">
        <div class="card-body">
            <div class="card-title">
                <strong>${element.name}</strong>
            </div>
            <div class="card-text">
                <p>${element.skills}</p>
            </div>
        </div>
    </div>
    `;
});
// 1. Load all Developers in DOM form object Data (end)

// 2. Load All Student in DOM from Object Data (start)

const students = [
    {
        name        : 'najmul',
        location    :'mirpur',
        photo       :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AhfRrQm3WhrkFJI3SQOxf_GZKRxm7jD_nJmXdRtK6mZSum_d_XE31p_ZIh0Y1Cnd_7E&usqp=CAU',
    },
    {
        name        : 'hasan',
        location    :'mirpur',
        photo      :'https://thumbs.dreamstime.com/b/handsome-young-man-serious-portrait-handsome-young-man-serious-portrait-white-background-111594200.jpg',
    },
    {
        name        : 'sobuj',
        location    :'mirpur',
        photo      :'https://images.squarespace-cdn.com/content/v1/54ff160de4b0a76e3a90696a/1562150296188-4XEX3JKWVO9CJX5I4UOO/us+American+passport+visa+photo+bath',
    },
    {
        name        : 'prince',
        location    :'dhanmondi',
        photo      :'https://s3.ivisa.com/website-assets/blog/id-photo2.jpg',
    },
    {
        name        : 'opu',
        location    :'mirpur',
        photo      :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvfyJVK5W8c_3M-f3IF8rURvueftVdeJI2CvbPS9IGH45pox7w2YcVrfBQqGkTL7l_xg&usqp=CAU',
    },
    {
        name        : 'meheraz',
        location    :'uttora',
        photo      :'https://image.shutterstock.com/image-photo/passport-photo-cute-well-dressed-260nw-1816206689.jpg',
    }
];
const st = document.querySelector('.st');

students.forEach(data => {
    st.innerHTML += `
    <div class="card">
        <img class="card-img-top" src="${data.photo}" alt="">
        <div class="card-body">
            <div class="card-title">
                <strong>${data.name}</strong>
            </div>
            <div class="card-text">
                <p>${data.location}</p>
            </div>
        </div>
    </div>
    `;
});
// 2. Load All Student in DOM from Object Data (end)

// 3. Load all phone book data to DOM (start)
const phoneBook = [
    {   id          : 1,
        name        : 'najmul',
        phone       :'01727127145',
        location    :'mirpur',
    },
    {   id          : 2,
        name        : 'hasan',
        phone       :'01727687122',
        location    :'mirpur',
    },
    {   id          : 3,
        name        : 'sobuj',
        phone       :'01727687123',
        location    :'mirpur',
    },
    {   id          : 4,
        name        : 'prince',
        phone       :'01727687124',
        location    :'dhanmondi',
    },
    {   id          : 5,
        name        : 'opu',
        phone       :'01727687125',
        location    :'mirpur',
    },
    {   id          : 6,
        name        : 'meheraz',
        phone       :'01727687126',
        location    :'uttora',
    },
    {   id          : 7,
        name        : 'nipa',
        phone       :'01727687127',
        location    :'samoli',
    },
    {   id          : 8,
        name        : 'nafisa',
        phone       :'01727687128',
        location    :'mohammodpur',
    },
    {   id          : 9,
        name        : 'akas',
        phone       :'01727687129',
        location    :'mohammodpur',
    },
    {   id          : 10,
        name        : 'ratul',
        phone       :'01727687130',
        location    :'mohammodpur',
    }
];

const t_body = document.querySelector('.t_body');
var zero = 0;
zero += 1;
phoneBook.map((value) => {
    t_body.innerHTML +=`
    <tr>             
        <th>${zero++}</th>
        <td>${value.name}</td>
        <td>${value.phone}</td>
        <td>${value.location}</td>
    </tr>
    `;
});

// 3. Load all phone book data to DOM (end)