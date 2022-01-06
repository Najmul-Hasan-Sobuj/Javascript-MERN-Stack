let area = (type,length,width) => {
    if (type == 'square') {
        return length * length;
    }else if(type == 'rectangle'){
        return length * width;
    }else if(type == 'traingle'){
        return .5 * length * width;
    }
}

console.log(area('square',100));
console.log(area('rectangle',33,33));
console.log(area('traingle',30,50));