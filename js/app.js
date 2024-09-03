const darkBtn = document.querySelector('.darkBtn')
const body = document.querySelector('body')

const darkMode = () => body.classList.toggle('darkMode')   
    // line of code 1 howar karone curly braces use na kore "= () =>" ei function e likha hoiche//
    


darkBtn.addEventListener('click', darkMode)