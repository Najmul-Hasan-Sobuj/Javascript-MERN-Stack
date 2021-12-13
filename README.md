# Javascript-MERN-Stack
![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg)


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

try {
	Block of code to try 
} catch(Err ) {
	Block of code to handle errors  
}finally {
	Block of code to be executed regardless of the 
	try/catch   	  
}