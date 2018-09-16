$("#new-request").click(function(e) {
    if (sessionStorage.getItem("status") == null) {
        e.preventDefault();
        loadUrl("login.html");
    } else {
        ;
    }
});

$("#answer").click(function(e) {
    if (sessionStorage.getItem("status") == null) {
        e.preventDefault();
        loadUrl("login.html");
    } else {
        ;
    }
});

function loadUrl(newLocation) {
    window.location = newLocation;
    return false;
}

if (sessionStorage.getItem("status") == null) {
    $("#login-signup-link").html("<a href=\"login.html\">Login</a> | <a href=\"sign-up.html\">Sign up");
} else {
    alert("Queer");
    $("#login-signup-link").html("placeholder name");
}
