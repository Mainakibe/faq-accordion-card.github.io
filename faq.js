//query selector

document.querySelectorAll('.question').forEach((question) => question.addEventListener('click',()=>{
    if(question.parentNode.classList.contains("acitve")){
        question.parentNode.classList.toogle("active")
    }
    else{
        document.querySelectorAll('.question').forEach(question => question.parentNode.classList.remove("active"))

        question.parentNode.classList.add("active")
    }
    
}))