


let user_word;
let user_letter;

let form = document.getElementById('myForm');

let output = document.querySelector('.output-paragraph');



function check(){


    user_word = form.elements['input1'].value;
    user_letter = form.elements['input2'].value;

    

 

    // validating the user word:

    if(user_word == ""){
        window.alert("please type any words on sentence field");
        clearAllValues();
        return;
    }

    // validating the input

    if((user_letter.length > 1 || user_letter.length == 0 || user_letter == " ")){
    window.alert("please enter only one character on letter field");
    clearAllValues();
    return;
}


    // now the logic is
    // if first occurence of letter is presnt then return remaining characters:

    for(let index in user_word){
        let idx = index;
        const char= user_word.charAt(index);
        if(char === user_letter){    // strict equality
            if(index == user_word.length-1){
                output.innerHTML ="that is the last character";
                console.log("that is the last character");
                
                return;
            }
            idx++;
            output.innerHTML = user_word.substring(idx,user_word.length);
            console.log(user_word.substring(idx,user_word.length));
            return;
        }

        if(index == user_word.length-1){
            output.innerHTML = "The letter does not exist in the sentence."
            console.log("“The letter does not exist in the sentence.");
            return;
        }
    }



    // adding respective output to the screen:
   
    // console.log(user_word);
    // console.log(user_letter);


  
    // console.log("hello");
}


// clearing all values:

function clearAllValues(){
    form.elements['input1'].value = "";
    form.elements['input2'].value="";
}