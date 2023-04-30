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