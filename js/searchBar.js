let child1 =  document.querySelector('#searchBlock')
let search = document.querySelector('#search')

function ifMatch(x){

    if(x.matches){

        child1.classList.toggle('hide',true)

        search.classList.toggle('hide',false)

        
        
    }else{

        child1.classList.toggle('hide',false)

        search.classList.toggle('hide',true)

    }

}

let x = window.matchMedia('(max-width:767px)')

ifMatch(x)

x.addEventListener('change',ifMatch)

window.addEventListener('load',function(){
    search.classList.add('loaded')
})