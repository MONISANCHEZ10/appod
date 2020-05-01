

jQuery(document).ready(function($){

    //let laserExtensionId = "eldkfaboijfanbdjdkohlfpoffdiehnb";
    //let port = chrome.runtime.sendMessage(laserExtensionId);

    async function sendSession() {
        const session = await solid.auth.currentSession();
        if (session && session.webId) {
            chrome.runtime.postMessage({
                type: "storeSolidSessionToken",
                sessionToken: session,
                profileUrl: window.location.host
            });
        }
    }

    async function login(idp) {
        const session = await solid.auth.currentSession();
        if (!session) {
            await solid.auth.login(idp);
            sendSession()
        } else {
            alert(`2 Logged in as ${session.webId}`);
        }

    }
    $('#submit').on('click touchstart', function(){
        let provider = $("#provider").val();
        login(provider);
    });


})