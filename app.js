
const modificarHtml = document.querySelector("#modify-html");

modificarHtml.addEventListener("click", function () {
const section = document.querySelector(".description")
const parrafo = document.querySelector(".description > p")
const imagen = document.querySelector(".img-description")
    if (parrafo.classList.contains("hidden")) {
        parrafo.classList.remove("hidden");
        imagen.classList.remove("hidden");
        window.location.reload();
    } else {
        parrafo.classList.add("hidden");
        imagen.classList.add("hidden");
        const p = document.createElement("p")
        const texto = document.createTextNode("Esta feature ha sido creada por el usuario2 y consistia en modificar el contenido html de la web al pulsar el botón correspondiente")
        p.appendChild(texto);

        const img = document.createElement("img")
        img.src="https://miro.medium.com/v2/resize:fit:600/0*fh4jM9d0jtXMIuEv.jpg";
        img.alt="feature-img"
        img.classList.add("img-description")

        section.appendChild(p)
        section.appendChild(img)
    }
})