const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const input = document.getElementById("input");


boton.addEventListener("click",() =>{
    
    if (input.value != false) {
        texto.innerText = "Cargando"
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

        let tipos = [];
        data.types.forEach(element => {
            tipos.push(element.type.name + " ")
        });


        texto.innerHTML = `
        <p>${data.name}</p>
        <img src="${data.sprites.front_default}"/>
        <p>Tipos: ${tipos}</p>
        <p>Peso: ${data.weight}</p>
        <p>Altura:${data.height}</p>
        `;
    } catch (error) {
       texto.innerText = error.message;
    }
}

