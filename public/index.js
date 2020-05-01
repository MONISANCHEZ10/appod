(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

jQuery(document).ready(function ($) {

    //let laserExtensionId = "eldkfaboijfanbdjdkohlfpoffdiehnb";
    //let port = chrome.runtime.sendMessage(laserExtensionId);

    async function sendSession() {
        var session = await solid.auth.currentSession();
        if (session && session.webId) {
            chrome.runtime.postMessage({
                type: "storeSolidSessionToken",
                sessionToken: session,
                profileUrl: window.location.host
            });
        }
    }

    async function login(idp) {
        var session = await solid.auth.currentSession();
        if (!session) {
            await solid.auth.login(idp);
            sendSession();
        } else {
            alert('2 Logged in as ' + session.webId);
        }
    }
    $('#submit').on('click touchstart', function () {
        var provider = $("#provider").val();
        login(provider);
    });
});

},{}]},{},[1]);
