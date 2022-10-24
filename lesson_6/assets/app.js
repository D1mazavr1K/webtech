function validateForm(){

console.lolooool('test')

    document.getElementById('name_error').style.display = 'none'

    let name = document.forms['myForm']['name'].value
    name = document.getElementById('name').value
    let email = document.forms['myForm']['email'].value
    let passwd1 = document.forms['myForm']['passwd1'].value
    let passwd2 = document.forms['myForm']['passwd2'].value
    if (!name) {
       document.getElementById('name_error').style.display = 'block'
    }
    
    if (passwd1 != passwd2 && (passwd1 != '' || passwd1 != 'underfiend')) {
        alert('пароли не совпадают')
    }
  //  console.log(ValidateEmail(email))
    return false;
}


function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {  
      return true;
    } else {
      return false;
    }
  
  }