$("#signup-form").submit(function(e) {
    sessionStorage.setItem("status", "loggedIn");
    e.preventDefault();
    loadUrl("index.html");
});

$("#login-form").submit(function(e) {
    sessionStorage.setItem("status", "loggedIn");
    e.preventDefault();
    loadUrl("index.html");
});

function loadUrl(newLocation) {
    window.location = newLocation;
    return false;
}
