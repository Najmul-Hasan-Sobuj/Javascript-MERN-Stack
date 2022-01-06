# Javascript-MERN-Stack
![alt](https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg)

## Class 01 Overview
### What is javaScript

- Popular web Programming Language 

- Scripting language 

- Lightweight 

- Cross-platform 

- Object-oriented syntax 

- Run-on browser 

### History 
In September 1995, a Netscape programmer named Brandan Eich developed a new scripting language in just 10 days. It was originally named Mocha, but quickly became known as LiveScript and, later, JavaScript. 
![alt](https://lh5.googleusercontent.com/8bjspmEHE5jFjMl3q2-DhFYO-TZS-IzDA1PPEBnvwbhKvkfRmbBIIP8U9Em3I9LT6onAH9iLKd3nZa00nM_SCRBQsaslJ7rQN-UCJ2rEm-b95kBdXZIL71UYtV3b-7O3y30ctyDl)

### Before javaScript  

- HTML 5

- CSS 3

- jQuery 

- Bootstrap 5 

- Github 
### IDE  

- VS code 

- PHPStorm 

- Sublime 

- Atom 
### Extension for VS Code 

- Auto Close Tag

- Auto Rename Tag

- Beautify

- HTML CSS Support

- HTML Snippets

- Intellisense for CSS class names in HTML

- Live Server

- Auto-Save on Window Change

- Lorem ipsum

- Live Sass Compiler(If you need)

- Path Intellisense

- PHP Intellisense

- Laravel Extra Intellisense(At this moment, no need)

- Prettier-Code formatter

- Vscode-icons/ Material Icon Theme

- Bracket Pair Colorize

- ESLint( For JS)

- JavaScript(ES6) code snippets

### Dev fonts Download 
[Dev Fonts Download Link](https://drive.google.com/file/d/1Nq_WhC34hg5xJt949gCtQGmbPGEcMxSt/view?fbclid=IwAR2ZCDy6W5AeEwmb7vR5ezHfDi3OX-RFqSJbntRJ5HoWv-WNAxkzLzEV8Bw)
 
### Environment Setup 

- Install VS Code and configure 

- Install Node JS 

- Install git 
### Start 

- Script Tag

- Internal 

- External 

- Inline   
### Dev Tools 

- Console log 

- Use of console 
### Basic Function 

- Alert 

- Confirm 

- Prompt  
### Statement & rules  

- In a programming language,  instructions ( lines of code  ) are called statements. 
- put a semicolon after a complete statement 
- also, you can avoid semicolon  
- two or more words are joined by using concatenation ( + )

## Class 02 Overview
### JavaScript Variables

- Var 
- Let 
- Const 

- #### Rules for variables

- Names can contain letters, digits, underscores, and dollar signs. 
- Names must begin with a letter
- Names can also begin with $ and _ 
- Names are case sensitive 
- Reserved words cannot be used as names

### Template literal Syntax

- Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions. 
- There are 2 type of template literal 
    - untag template literal 
    - Tag  template literal 
- Interpolation variables and expression - ``` ${ var / ex } ```

### Comments 
- Make a comment by using // 
- Line comment 
- Multiline comments 
- Doc block for documentation 

### Operators 

#### JavaScript Arithmetic Operators
>Arithmetic operators are used to perform arithmetic on numbers:

    | Operator | Description                  |
    | -------- | ---------------------------- |
    | +        | Addition                     |
    | -        | Subtraction                  |
    | *        | Multiplication               |
    | **       | Exponentiation               |
    | /        | Division                     |
    | %        | Modulus (Division Remainder) |
    | ++       | Increment                    |
    | --       | Decrement                    |

#### JavaScript Assignment Operators
>Assignment operators assign values to JavaScript variables.

    | Operator | Example   | Same As    |
    | -------- | --------- | ---------- | 
    | =        | x = y     | x = y      |
    | +=       | x += y    | x = x + y  |
    | -=       | x -= y    | x = x - y  |
    | *=       | x *= y    | x = x * y  |
    | /=       | x /= y    | x = x / y  |
    | %=       | x %= y    | x = x % y  |
    | **=      | x **= y   | x = x ** y |

#### JavaScript Comparison Operators

    | Operator | Description                       |
    | -------- | --------------------------------- |
    | ==       | equal to                          |
    | ===      | equal value and equal type        |
    | !=       | not equal                         |
    | !==      | not equal value or not equal type |
    | >        | greater than                      |
    | <        | less than                         |
    | >=       | greater than or equal to          |
    | <=       | less than or equal to             |    
    | ?        | ternary operator                  |    
#### JavaScript Logical Operators

    | Operator | Description |
    | -------- | ----------- |
    | &&       | logical and |
    | ||       | logical or  |
    | !        | logical not |
### Data Types

- String 
- Number 
- Boolean 
- Array 
- Object 
- Undefined 

### Conditional Statement 

- if 
- else 
- else if 
- switch case 























## Class 06 Overview
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

## Class 07 Overview
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

## Class 08 Overview
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