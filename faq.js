const accordionQuestions=document.querySelectorAll(".accordion-question")

accordionQuestions.forEach(accordionQuestion=>{
    accordionQuestion.addEventListener("click",event=>{
        accordionQuestion.classList.toggle("active")
    })
})