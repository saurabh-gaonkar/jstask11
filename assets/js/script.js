

let symbol = "!@#$%^&*()_+<>?/.,';:[]\|",
random_symbol = symbol[Math.floor(Math.random() * symbol.length)],
generated_password = "",
generator_button = document.querySelector('.click-to-generate'),
password_box = document.querySelector('.display-password'),
display_password = document.querySelector('.show-password-here');


const password_contents = [
  String.fromCharCode(Math.floor(Math.random() * 26 + 65)),
    String.fromCharCode(Math.floor(Math.random() * 26 + 97)),
    String.fromCharCode(Math.floor(Math.random() * 10 + 48)),
    random_symbol
];

generator_button.addEventListener('click',function(){
    let password_length = parseInt(document.querySelector('.length-value').value);
    let final_password = "";
    while(generated_password.length <= password_length){
        generatePassword();
    }
    if(generated_password.length > password_length){
        final_password = generated_password.slice(0,password_length);
    }else{
        final_password = generated_password;
    }
    display_password.innerText = final_password;
            password_box.style.padding = "12px 0";
});

function generatePassword(){
    const rules_checked = document.querySelectorAll('input[type="checkbox"]');
    rules_checked.forEach((i,index)=>{
        if(i.checked == true){
            generated_password += password_contents[index];
            
        }
       
    })
}


