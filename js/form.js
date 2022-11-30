const btn = document.getElementById("btn");

// btn.addEventListener('click', (event) =>{
//   event.preventDefault()

//   check();
// })

btn.addEventListener('click', function block(){
  btn.addEventListener('click', (e) =>{
    e.preventDefault()
    check();
  } )
})

function check(){
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const error = document.getElementById("erros");

  if(email.value == ''){
    email.classList.add("erro");
    email.classList.remove("ok");
    
  }else{
    email.classList.remove("erro");
    email.classList.add("ok");
    error.innerHTML = "";
  }


  if(nome.value == ''){
    nome.classList.add("erro");
    nome.classList.remove("ok");
    
  }else{
    nome.classList.remove("erro");
    nome.classList.add("ok");
    error.innerHTML = "";
  }


  if(mensagem.value == ''){
    mensagem.classList.add("erro");
    mensagem.classList.remove("ok");
    
  }else{
    mensagem.classList.remove("erro");
    mensagem.classList.add("ok");
  }

  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    error.innerHTML = "Email invalido";
    email.classList.add("erro");
    email.classList.remove("ok");
  }else{
    error.innerHTML = "";
    email.classList.remove("erro");
    email.classList.add("ok");
  }

  const emailOk = document.getElementsByClassName("email");
  const emailValid = [ ... emailOk].every((emailok)=>{
    return (emailok.className === "email ok")
  })
  const nomeOk = document.getElementsByClassName("nome");
  const nomeValid = [ ... nomeOk].every((nomeok)=>{
    return (nomeok.className === "nome ok")
  })
  const mensagemOk = document.getElementsByClassName("mensagem");
  const mensagemValid = [ ... mensagemOk].every((mensagemok)=>{
    return (mensagemok.className === "mensagem ok")
  })

  if(emailValid && nomeValid && mensagemValid){
    btn.addEventListener('click')
  }
}