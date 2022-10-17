console.log('hello')

document.body.onload = () => {
    console.log('hello onload')
    let request = new XMLHttpRequest;
    request.open('GET', './header.html', true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4)
        if (request.status === 200) {
            console.log(request.responseText)
            document.body.innerHTML = request.responseText + document.body.innerHTML
        }
    }
}