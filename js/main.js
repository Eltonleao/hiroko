var hostname = '';
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    hostname = '';
} else {
    hostname = '/hiroko/'
}
var path = window.location.hostname;

$(document).ready(async function () {
    await init();
    await loadComponents();

    $(".btn-logout").on('click', function(){
        window.localStorage.setItem('user', null);
    });
});


function init() {
    var user = localStorage.getItem('user');
    
    if (user == false || user == 'null' || user == '') {
        window.location.href = hostname + '/login.html';
    } else{
        loadUserData(user);
    }

}

function loadUserData(user){
    var user = JSON.parse(user);
    $(".load-username").html(user.name);
}

function loadComponents() {



    var loaders = $('.load');
    // console.log(loaders)
    var loader;
    var component;
    var type;
    var id;
    for (var i = 0; i < loaders.length; i++) {
        loader = $(loaders[i]);
        id = loader.attr('id');
        // console.log(loader);
        type = loader.data('type');

        if (type) {
            component = hostname + "/components/" + type + "/" + loader.data('component') + ".html";
        } else {
            component = hostname + "/components/" + loader.data('component') + ".html";
        }

        loader.load(component);
    }

}