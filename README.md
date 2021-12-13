# Javascript-MERN-Stack
![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg)

## Assignment 06
### Array ( Data Structure ) 

- Used more than one value or can be more than one value 
- The best way to decorate data for future 
- Any type of data can be stored in an array 
- declare an array 
```
const array_var = [v1, v2, v3  . . . . ]; 
```
- Create some array data structure 
    - 10 flowers of Bangladesh 
    - 10 Rivers of Bangladesh 
    - 10 fish of Bangladesh 
    - 10 Birds of Bangladesh 
    - 10 vegetable of Bangladesh 

- Get value from an array 
```
array_var[ index_number ] 
```
- Get array length 
```
array_var.length 
```
- Get all array value by for loop 
```
for( let i = 0; i < array_var.length;  i++ ){
    return array_var[ i ];
}
```
- Get all array data by forEach & Map ( iteration )
```
array_var.forEach( function(data){
    return data;    
})

array_var.map((data) => {
    return data;    
})
```
- Create an array by using Array Constructor 
```
new Array(item1, item2, . . . )
```
- Array to string conversion 
```
-> toString
-> join
-> split 
```
- Array Add & Remove 
```
-> push
-> pop 
-> shift
-> unshift 
-> slice
-> splice 
```
- Array  methods & Uses 
```
-> concat() 
-> reverse()
-> sort() 
-> filter() 
-> reduce()
-> every() 
-> some() 
-> indexOf()
-> find() 
-> findIndex()
-> from() 
-> keys() 
-> includes() 
-> isArray()
-> valueOf() 
```
- Multidimensional  Array  
```
[
    [item1, item2, . . . . ],
    [item1, item2, . . . . ],
    [item1, item2, . . . . ]
]
```

## Assignment 07
### Object Data Structure 

- A complete Data structure will be made by  array and object 
- In an array data structure we face some problems like data key 
- But with array and object data, we can build a complete structure for the future. 

- #### Declare a object data structure 
```
const obj_name = {
    name : ‘Asraful Haque’,
    age : 10,
    skill : ‘Laravel Developer’
}
```

- #### Declare a object data structure with new Object 
```
const obj_name =  new Object({
    name : ‘Asraful Haque’,
    age : 10,
    skill : ‘Laravel Developer’
})
```
- #### Get data form an object data structure 
```
    -> By dot notation obj_name.property_name;
    -> By array notation obj_name[‘property_name’];
```

- #### Create a Complete Array and Object Data structure 
```
const obj_name = [
    {
        name : ‘Asraful Haque’,
        age : 10,
        skill : ‘Laravel Developer’
    },
    {
        name : ‘Asraful Haque’,
        age : 10,
        skill : ‘Laravel Developer’
    },
    {
        name : ‘Asraful Haque’,
        age : 10,
        skill : ‘Laravel Developer’
    }
]
```

## Assignment 09
### JSON Data 
    1. JSON stands for JavaScript Object Notation 
    2. The lightweight data-interchange format 
    3. Language independent 
    4. Easy to understand and self-describing 
    5. JSON is a text format for storing and transporting data 
    6. JSON helps to convert array and object data to a string format for devs-friendly data use.  

- Declare a JSON

    - It looks like an object .
    - Data is named/Value pairs.
    - Data is separated by a comma.
    - Curly braces hold the object .
    - Square brackets hold arrays.

    {
        “name1” : “value1”,
        “name2”: “value2”
    }

- JSON data types

    - string.
    - number.
    - object.
    - array.
    - Boolean.
    - null.

- JSON values cannot be one of the following types

    - function.
    - date.
    - undefined .

- JSON.parse()
    - to convert JSON data string to object
    - to convert an array string to an array  

- JSON.stringify
    - to convert an object data to a JSON string
    - to convert an array to JSON string 

- JSON file 
    We have to create a JSON file by setting.json 
    db.json / api.json 

### Errors handling

- To Handle errors in a custom way 
- Prevent apps crashing for an error   

- Try Catch Finally 

    -> Try
    -> Catch 
    -> Throw 
    -> Finally   

```
    try {
        Block of code to try 
    } catch(Err ) {
        Block of code to handle errors  
    }finally {
        Block of code to be executed regardless of the 
        try/catch   	  
    }
```