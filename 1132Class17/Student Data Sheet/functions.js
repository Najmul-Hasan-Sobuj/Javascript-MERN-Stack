

/**
 * Data Send to LS 
 * @param {*} key 
 * @param {*} arr 
 */
function dataSend(key , arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;


}

/**
 * Data Get form LS 
 * @param {*} key 
 * @returns 
 */
function dataGet(key){

    let data = localStorage.getItem(key);

    return data ? JSON.parse(data) : false ;
      
       

}