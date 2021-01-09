var path = window.location.hostname;

$(document).ready(function() {
    // $("#conteudo").load("dashboard.html");

    loadComponents();
});

function loadComponents() {

    var loaders = $('.load');
    var loader;
    var component;
    var type;
    for (var i = 0; i < 2; i++) {
        loader = $(loaders[i]);
        type = loader.data('type');
        if (type) {
            component = "/components/" + type + "/" + loader.data('component') + ".html";
        } else {
            component = "/components/" + loader.data('component') + ".html";
        }
        loader.load(component);
    }

}