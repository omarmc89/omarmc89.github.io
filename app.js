
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
        const texto = document.createTextNode("Esta feature ha sido creada por el usuario2 y consistia en modificar el contenido html de la web al pulsar el botón correspondiente.")
        p.appendChild(texto);

        const img = document.createElement("img")
        img.src="https://miro.medium.com/v2/resize:fit:600/0*fh4jM9d0jtXMIuEv.jpg";
        img.alt="feature-img"
        img.classList.add("img-description")

        section.appendChild(p)
        section.appendChild(img)
    }
})

const modifyAttributesHtml = document.querySelector('#modify-attr-html')

modifyAttributesHtml.addEventListener('click', function () {
    const img = document.querySelector(".img-description")
    const parrafo = document.querySelector(".description > p")
    if (parrafo.classList.contains("hidden")) {
        window.location.reload()
    } else {
        img.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png')
        parrafo.setAttribute("class", "hidden")
    }
}) 

const modifyCss = document.querySelector('#modify-css')

modifyCss.addEventListener('click', function () {
    const parrafo = document.querySelector(".description > p")
    const img = document.querySelector(".img-description")
    const navbar = document.querySelector(".navbar")

    if (parrafo.style.color === "darkblue") {
        window.location.reload()

    } else {
        parrafo.style.backgroundColor = "rgba(255, 192, 203, 0.7)"
        parrafo.style.fontSize = "20px"
        parrafo.style.color = "darkblue"
        parrafo.style.borderRadius = "20px"
        parrafo.style.padding ="20px 20px"

        navbar.style.backgroundColor = "rgba(255, 192, 203, 0.7)"

        img.style.display = "none"
    }
})

const home= document.querySelector("#home-btn")
home.addEventListener("click", function() {
    window.location.reload()
})