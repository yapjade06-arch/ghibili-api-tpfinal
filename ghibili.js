const btnPeliculas = document.getElementById("btnPeliculas");
const resultados = document.getElementById("resultados");

btnPeliculas.addEventListener("click", cargarPeliculas);

function cargarPeliculas() {
    resultados.innerHTML = "Cargando películas...";

    fetch("https://ghibliapi.vercel.app/films")
        .then(res => res.json())
        .then(data => {
            resultados.innerHTML = "";

            data.forEach(pelicula => {
                resultados.innerHTML += `
                    <div class="card">
                        <img src="${pelicula.image}" alt="${pelicula.title}">
                        <div class="titulo">${pelicula.title}</div>
                        <p><strong>Director:</strong> ${pelicula.director}</p>
                        <p><strong>Año:</strong> ${pelicula.release_date}</p>
                        <p>${pelicula.description}</p>
                    </div>
                `;
            });
        })
        .catch(err => {
            resultados.innerHTML = "Error cargando películas 😭";
            console.error(err);
        });
}