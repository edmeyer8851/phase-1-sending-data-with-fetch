// Add your code here
const body = document.querySelector('body');

function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(response => response.json())
        .then(data => {
            let id = document.createElement('div')
            id.textContent = data.id
            body.appendChild(id)
        })
        .catch(err => {
            let errorMessage = document.createElement('div')
            errorMessage.textContent = err.message
            body.appendChild(errorMessage)
        })
}