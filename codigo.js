const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const input = document.getElementById("input");


boton.addEventListener("click",() =>{
    if (input.value != false) {
        obtenerPokemon(input.value)
    }
    else
    {
        texto.innerText = "valor invalido"
    }
});

async function obtenerPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await response.json();
  
        let nombre2;
        nombre2 = data.name;
        let img = data.sprites.front_default;
        let tipos = [];
        data.types.forEach(element => {
            tipos.push(element.type.name + " ")
        });


        texto.innerHTML = `
        <p>${nombre2}</p>
        <img src="${img}"/>
        <p>Tipos: ${tipos}</p>
        <p>Peso: ${data.weight}</p>
        <p>Altura:${data.height}</p>
        `;
    } catch (error) {
       texto.innerText = error.message;
    }
}

