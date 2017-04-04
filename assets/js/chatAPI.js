//FB API
window.fbAsyncInit = function() {
    FB.init({
        appId: '156722261489293',
        xfbml: false,
        version: 'v2.8'
    });

};

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function fbLogin() {
    FB.login(function(response) {
        $('#message>.container').show(100);
        $('#message>.login').hide(100);
        FB.api('/me', (response) => {
            document.getElementById('name').innerText = response.name;
            document.getElementById('name').setAttribute("href", 'https://facebook.com/' + response.id);
        });
        FB.api('/me/picture', (response) => {
            document.getElementById('user-image').setAttribute("src", response.data.url);
        })
    });
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//google apis
var googleUser = {};
var googleLogin = function() {
    gapi.load('auth2', function() {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '434984059423-kr0d4ho77asl75gp038pta8a1opid214',
            cookiepolicy: 'single_host_origin'
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('google-login'));
    });
};

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            $('#message>.container').show(100);
            $('#message>.login').hide(100);
            document.getElementById('name').innerText = googleUser.getBasicProfile().getName();
            document.getElementById('name').setAttribute("href", 'https://plus.google.com/' + googleUser.getBasicProfile().getId());
            document.getElementById('user-image').setAttribute("src", googleUser.getBasicProfile().getImageUrl());
        },
        function(error) {
            alert(JSON.stringify(error, undefined, 2));
        });
};
