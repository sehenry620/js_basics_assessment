/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {

    //your code here
    
    let newArray = []

    for(let i=0; i < artArray.length; i+=2){
        
        newArray.push(artArray[i])
       
    }
    // console.log(artArray)
    writeAscii(newArray);

})();


