async function loadPage(name) {
    var main_content = document.getElementById("main");
    var response = await fetch(`paginas/${name}.html`);
    
    main_content.innerHTML = await response.text();
}
loadPage("principal");