const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click' ,()=> {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;
    const coverElemnt = document.querySelector('.cover')
    coverElemnt.classList.add('open-cover')

    setTimeout(() => {
        //document.querySelector('.container-letter').style.overflow = 'visible'

        coverElemnt.style.zIndex = -1
        const paperElement = document.querySelector('.paper')
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')

        const heartElement = document.querySelector('.heart')
        heartElement.style.display = 'block' 
    }, 500)
})

btnCloseElement.addEventListener('click' ,()=> {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    
    const coverElemnt = document.querySelector('.cover')
    coverElemnt.style.zIndex = 0
    const paperElemnt = document.querySelector('.paper')
    //document.querySelector('.container-letter').style.overflow = 'hidden'
    paperElemnt.classList.add('close-paper')
    paperElemnt.classList.remove('open-paper')
    /*  
    */    
   
   setTimeout(() => {
       coverElemnt.classList.remove('open-cover')

        const heartElement = document.querySelector('.heart')
        heartElement.style.display = 'none' 
    }, 500)
})


