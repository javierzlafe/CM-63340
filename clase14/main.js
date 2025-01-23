

//estructura de fetch


/*
fetch(`https://api.example.com/data`)  envio peticion
.then(reponse => response.json())  convierto respuesta a json
.then (data =>{
    console.log(data))   //puedo trabajar con los datos recibidos en json
})
.catch (error=>{
    console.log("error")
})  
 */




/* const url = "https://jsonplaceholder.typicode.com/post"


fetch(url)
.then( (respuesta)=>  respuesta.json()  )
.then( (data)=> console.table(data)  )
.catch( (error)=> console.error("se rompio todo" +error)  ) */




let URL = 'https://pokeapi.co/api/v2/pokemon?limit=3'

  const pokemonContainer = document.getElementById('pokemon-container');

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;

    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const pokemonElement = document.createElement('div');
          pokemonElement.innerHTML = `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}" >
           
          `;
          pokemonContainer.appendChild(pokemonElement);
        })
        .catch(error => {
          console.error('Ha ocurrido un error al obtener los datos del Pokémon:', error);
        });
    });
  })
  .catch(error => {
    console.error('Ha ocurrido un error al obtener la lista de Pokémon:');
  });
