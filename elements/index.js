
function addClick() {
    document.querySelector('#click_me').addEventListener('click',
        function clickMe() {
            console.log('hello from click me')
        }, {
            once: true
        })
}

function changeAttr(e) {

    if (e.target.attributes['attached'] && e.target.attributes['attached'].value === 'on') {
        e.target.setAttribute('attached', 'off')
    } else {
        e.target.setAttribute('attached', 'on')
    }
}

function removeElement(e) {
    e.target.remove()
}

function addSubDiv(e) {
    var div = document.createElement('div');
    div.innerHTML = 'sub div';
    e.target.appendChild(div);
}

function callXHR() {
    fetch('../README.md').then((data) => {
        console.log(data);
    })
}

document.querySelector('#CopyText').addEventListener('keyup', function pasteText(e) {
    document.querySelector('#PasteText').innerHTML = e.target.value;
})


document.querySelector('#ThrowException').addEventListener('click', function pasteText(e) {
    throw new Error('throw exception without try catch')
})

document.querySelector('#ThrowExceptionTryCatch').addEventListener('click', function pasteText(e) {
    try {
        throw new Error('throw exception without try catch');
    } catch (e) {
        console.warn(e);
    }
})


document.querySelector('#ThrowException').addEventListener('click', function pasteText(e) {
    throw new Error('throw exception without try catch')
})

document.querySelector('#CallStack').addEventListener('click', function () {
    a();
})
