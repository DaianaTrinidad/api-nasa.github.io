const url ="https://api.nasa.gov/planetary/apod?api_key=Rg8Bf8cbi7PRtJ876gXedk1cW2fXaoLmAbtl1bOv&count=15";

async function listaImagenes(){
    //solicitud try
    try{
      let fetchImage= await fetch(url)
      let datosImagenes= await fetchImage.json()

      console.log(datosImagenes)
      const card=document.querySelector("[data-ul]")

      datosImagenes.forEach(elemento => {
        const contenido= `<li class="card">
         <img class="card__image" src="${elemento.url}" alt="imagen">
         <h3 class="card__title">${elemento.title}</h3>
     </li>` 
     card.innerHTML=card.innerHTML + contenido
      })
    }
    catch(error){
        console.log(error)
    }
}
listaImagenes();


//function listaImagenes(){
/*fetch(url)
.then(response=>response.json())
.then(datosImagenes=>{
    console.log(datosImagenes)
    const card=document.querySelector("[data-ul]")

    datosImagenes.forEach(elemento => {
      const contenido= `<li class="card">
       <img class="card__image" src="${elemento.url}" alt="imagen">
       <h3 class="card__title">${elemento.title}</h3>
   </li>` 
   card.innerHTML=card.innerHTML + contenido
    });
})
.catch(error = console.log(error))
}
listaImagenes();*/