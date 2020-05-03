(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

//boots

var loginDiv = document.getElementById('div-login');
var logoutDiv = document.getElementById('div-logout');

solid.auth.trackSession(function (session) {

    if (!session) {
        // MOSTRAR LO QUE HYA SING IN , PROVIDER Y LOGIN
        console.log('The user is not logged in');
        alert('The user is not logged in');
        var htmltext = '<div class="card-body">\n                <form>\n                    <div class="input-group form-group">\n                        <div class="input-group-prepend">\n                            <span class="input-group-text"><i class="fas fa-user"></i></span>\n                        </div>\n                        <select id="provider" class="form-control">\n                            <option value="https://solid.community">Solid</option>\n                            <option value="http://localhost:8443">SolidLocal</option>\n                            <option value="https://inrupt.net">Inrupt</option>\n                        </select>\n                    </div>\n                    <div class="form-group">\n                        <button id="button-login" type="button" class="btn float-right login_btn">Login</button>\n                    </div>\n                </form>\n            </div> ';
        loginDiv.innerHTML = htmltext;
        logoutDiv.innerHTML = '';
        document.getElementById('button-login').onclick = function () {
            var idp = document.querySelector("#provider").value;
            alert("inside of login funtion" + idp);
            login(idp);
        };
    } else {
        // CARD ME + BOTON LOGOUT
        //  let name = getName(session.webId);
        console.log("MI NOMBRE : " + name);
        console.log('The user is ' + session.webId);
        alert('The user is ' + session.webId);
        console.log(solid.auth);
        var htmlCard = '<div class="card-body">\n                    <img class="card-img-top" src="..." alt="Card PHOTO SOLID">\n                     <div class="card-body">\n                    <p class="card-text">INFO CAR ME ROL.</p>\n                    <button id="button-logout" type="button" class="btn float-right login_btn">Logout</button>\n                    </div>\n            </div> ';
        logoutDiv.innerHTML = htmlCard;
        loginDiv.innerHTML = '';
        document.getElementById('button-logout').onclick = function () {
            solid.auth.logout().then(function () {
                return alert('Goodbye!');
            });
        };
    }
});

//controller
var login = async function login(idp) {
    alert("INSIDE OF login funtion" + idp);
    await solid.auth.login(idp);
    alert("A LOGUEARSE");
};

},{}]},{},[1]);
