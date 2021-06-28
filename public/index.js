// url rick and morty

const url = "https://rickandmortyapi.com/api/character";

// web api
window
    .fetch(url)
    // procesar la respuesta y convertirla en JSON
    .then(responses => responses.json())
    // JSON  =>  data
    .then(data => {
        const todosLosItems = [];
        // recorremos con un ciclo
        data.results.forEach(item => {
            // crear imagen
            const imagen = document.createElement('img');
            imagen.src = item.image;
            // crear el titulo
            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
            // crear la especie
            const especie = document.createElement('span');
            especie.textContent = item.species;
            // agregando un card
            const card = document.createElement('div');
            card.className = 'card';
            card.append(imagen, titulo, especie);

            todosLosItems.push(card);
        });
        const container = document.querySelector('.container');
        container.append(...todosLosItems);
    })