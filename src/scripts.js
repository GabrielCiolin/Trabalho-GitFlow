async function loadPage(event, name) {
    var main_content = document.getElementById("main");
    var response = await fetch(`paginas/${name}.html`);
    
    main_content.innerHTML = await response.text();

    // Altera o elemento ativo para a página atual
    if (!event) return;

    var previousElement = document.getElementsByClassName('active')[0];
    var currentElement = event.target;

    previousElement.classList.remove('active');
    currentElement.classList.add('active');
}
loadPage(null, "principal");
