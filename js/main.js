$(document).ready(function() {
    // $("#conteudo").load("dashboard.html");

    loadComponents();
});

function loadComponents() {

    var loaders = $('.load');
    var loader;
    var component;
    for (var i = 0; i < 2; i++) {
        loader = $(loaders[i]);
        component = loader.data('component') + ".html";
        loader.load(component);
    }

}

function loadContent(loader, page) {
    $("#" + loader).load(page + ".html");
}