

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const skills = document.querySelectorAll('.skills')

skills.forEach((element) => myObserver.observe(element))