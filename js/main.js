var path = window.location.hostname;

$(document).ready(function() {
    // $("#conteudo").load("dashboard.html");

    loadComponents();
});

function loadComponents() {

    var loaders = $('.load');
    console.log(loaders)
    var loader;
    var component;
    var type;
    var id;
    for (var i = 0; i < loaders.length; i++) {
        loader = $(loaders[i]);
        id = loader.attr('id');
        console.log(loader);
        type = loader.data('type');
        if (type) {
            component = "/components/" + type + "/" + loader.data('component') + ".html";
        } else {
            // console.log('entrei aqui');
            component = "/components/" + loader.data('component') + ".html";
            // console.log(component);
        }
        loader.load(component);
    }

}