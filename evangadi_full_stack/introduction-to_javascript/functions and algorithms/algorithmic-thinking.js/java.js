function small(lower){
    var basket = "";
    for( let i = 0; i <= lower.length; i++ ){
       var oneLetter = lower.charAt(i)
        console.log("single letter", oneLetter);

        
        if(oneLetter === oneLetter.toLowerCase()){
            basket = basket + oneLetter
            console.log("my storage", basket);
        }

        
    }

    // if the single letter is lowercase add it to container
return basket;
    
}

console.log(small("GHKGKKGDhDDoMMuBVFFNVNFr"));
 

function hidden(givenString){
    console.log("orignal string", givenString);
         
       var hiddenWordContainer = "";
       for(let i = 0; i < givenString.length; i++){
          var singleLetter = givenString.charAt(i);
          console.log("singleLetter", singleLetter);
          
           
          if(singleLetter === singleLetter.toLowerCase()){
              hiddenWordContainer = hiddenWordContainer + singleLetter
              console.log("our storage", hiddenWordContainer);
          }
          
       } 
     
       return hiddenWordContainer
  }
  
  console.log(hidden("BJBJBJhNJNJKiJFUR"));



function naem(letter){
    
    let blank = "";
    for(i = 0; i < letter.length; i++){
        
        let letterSingle = letter.charAt(i);
        

        if(letterSingle === letterSingle.toLowerCase()){
            blank = blank + letterSingle
        }
    }
    
    return blank;
    
}





function logo(what){

    
    
}





