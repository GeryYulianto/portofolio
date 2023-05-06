tab = (value) => {
    const exp = document.querySelector('#list-experience')
    const skills = document.querySelector('#list-skills')
    const edu = document.querySelector('#list-edu')
    exp.style.display = 'none'
    skills.style.display = 'none'
    edu.style.display = 'none'
    if (value === 'experience') {
        exp.style.display = 'block'
    }
    else if (value === 'skills') {
        skills.style.display = 'block'
    }
    else {
        edu.style.display = 'block'
    }
}

function sendMail() {

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value, 
        message: document.getElementById('message').value, 
    }
    const serviceID = 'service_5feew3f'
    const templateID = 'template_l6l9vj7'

    emailjs
    .send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res)
            alert('Message sent succesfully')
        })
    .catch((err) => console.log(err))
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission behavior

    sendMail();
});
