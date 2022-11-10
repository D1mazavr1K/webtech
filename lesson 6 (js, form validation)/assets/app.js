function validateForm() {
    console.log('success prevent default submit')

    let name = document.forms['myForm']['name'].value
    console.log(name)
    if (!name) {
        // document.getElementById('name_error').style.display = 'block'
    }
    let email = document.forms['myForm']['email'].value
    console.log(validateEmail(email) )

    /*
    дальнейшую часть работы вам предстоит проделать самостоятельно :)
     */

    let request = new XMLHttpRequest
    request.open('POST', './assets/server.php')
    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    let data = {
        name: name
    }
    request.send(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (request.readyState === 4)
            if (request.status === 200) {
                console.log(request.responseText)
            }
    }
    return false;
}

document.getElementById('myForm').onsubmit = () => {
    return validateForm()
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}
