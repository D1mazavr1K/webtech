function validateForm(){
    console.log('success prevent default submit')
    let name = document.forms["myForm"]["name"].value
    console.log(name)

    if (!name) {
        alert('Введите имя')
    }

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
