function menuShow(){
    let menu = document.querySelector('.menu-link')
    let logo = document.querySelector('#Background-logo')
    let titularidade = document.querySelector('.titularidade')
    let hamburguerAnime = document.querySelector('.hamburguer')
    let barraanime = document.querySelector('#hamburguer2')
    let barraAfteranime = document.querySelector('#hamburguer1')
    let barraBeforeanime = document.querySelector('#hamburguer3')
    let menualtera = document.querySelector('#menu-texto')
    
    let sair = document.getElementById("menu")
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        logo.classList.remove('logoaltera')
        titularidade.classList.remove('titularidadeAltera')
        hamburguerAnime.classList.remove('hamburguerAnime')
        barraanime.classList.remove('BarraAnimationOpen')
        barraAfteranime.classList.remove('BarraAfterAnimationOpen')
        barraBeforeanime.classList.remove('BarraBeforeAnimationOpen')
        menualtera.classList.remove('menualtera')
        document.getElementById("menu-texto").innerHTML="MENU"
        
    
        sair.classList.remove('acao')
    }
    else{
        menu.classList.add('open');
        logo.classList.add('logoaltera');
        titularidade.classList.add('titularidadeAltera')
        hamburguerAnime.classList.add('hamburguerAnime')
        barraanime.classList.add('BarraAnimationOpen')
        barraAfteranime.classList.add('BarraAfterAnimationOpen')
        barraBeforeanime.classList.add('BarraBeforeAnimationOpen')
        menualtera.classList.add('menualtera')
        document.getElementById("menu-texto").innerHTML="SAIR"
        

        sair.classList.add('acao')
    }

}