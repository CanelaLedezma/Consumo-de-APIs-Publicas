const texto = document.getElementById("texto");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => obtenerPokemon("ditto"));

async function obtenerPokemon(nombre) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await response.json();
  
        let nombre2;
        nombre2 = data.name;
        let img = data.sprites.front_default;
        let tipos = [];
        data.types.forEach(element => {
            tipos.push(element.type.name)
        });


        texto.innerHTML = `
        <h1>${nombre2}</h1>
        <img src="${img}"/>
        <p>${tipos}</p>
        <p>peso: ${data.weight}</p>
        <p>Altura:${data.height}</p>

        `;
    } catch (error) {
       texto.innerText = error.message;
    }
}

