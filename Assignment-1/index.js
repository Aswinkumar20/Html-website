function showForm(){
    let main_row_button = document.querySelector('.main-button');
    let user_form = document.querySelector('.user-details');
    let form_buttons = document.querySelector('.form-buttons');

    user_form.setAttribute("style", "display:block");
    main_row_button.setAttribute("style", "display:none");
    form_buttons.setAttribute("style","display:block");

}





const form = document.getElementById('myForm');


let first_name;
let last_name;
let city_name;
let country_name;

function addToBottom(){

    first_name = form.elements['firstName'].value;
    last_name = form.elements['lastName'].value;
    city_name = form.elements['city'].value;
    country_name = form.elements['country'].value;

    first_name = first_name[0].toUpperCase()+first_name.substring(1);
    last_name = last_name[0].toUpperCase()+last_name.substring(1);
    city_name = city_name[0].toUpperCase()+city_name.substring(1);
    country_name = country_name[0].toUpperCase()+country_name.substring(1);



    // console.log(typeof(first_name));

    // console.log(first_name + " " + last_name+ " " + city_name + " "+ country_name);

    // validating the input
    if(first_name != "" && last_name != "" && city_name != "" && country_name != ""){
        let html = 
    `
            <tr>
                <td></td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${city_name}</td>
                <td>${country_name}</td>
            </tr>
    `

        let content =  document.querySelector('.table-body');

        content.insertAdjacentHTML('beforeend', html);

        clearAllValues();
        return;
    }else{
        window.alert("please fill out the details");
    }
    
    

}


function clearAllValues(){
    form.elements['firstName'].value = "";
    form.elements['lastName'].value = "";
    form.elements['city'].value= "";
    form.elements['country'].value = "";
}



function addToTop(){


    // gettiing value by their defined name
    first_name = form.elements['firstName'].value;
    last_name = form.elements['lastName'].value;
    city_name = form.elements['city'].value;
    country_name = form.elements['country'].value;


    // console.log(first_name + " " + last_name+ " " + city_name + " "+ country_name);

    if(first_name != "" && last_name != "" && city_name != "" && country_name != ""){
        let html = 
    `
            <tr>
                <td></td>
                <td>${first_name}</td>
                <td>${last_name}</td>
                <td>${city_name}</td>
                <td>${country_name}</td>
            </tr>
    `

        let content =  document.querySelector('.table-body');

        content.insertAdjacentHTML('afterbegin', html);

        clearAllValues();
        return;
        
    }else{
        window.alert("please fill out the details");
    }
    

}