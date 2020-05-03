//boots

const loginDiv = document.getElementById('div-login')
const logoutDiv = document.getElementById('div-logout')
import { fetchDocument } from 'tripledoc';

async function getName(webId) {
    console.log("IN GETNAME")
    /* 1. Fetch the Document at `webId`: */
    const webIdDoc = await fetchDocument(webId);
    /* 2. Read the Subject representing the current user's profile: */
    const profile = webIdDoc.getSubject(webId);
    /* 3. Get their foaf:name: */
    return profile.getString('http://xmlns.com/foaf/0.1/name')
}





solid.auth.trackSession(session => {

    if (!session ) {
        // MOSTRAR LO QUE HYA SING IN , PROVIDER Y LOGIN
        console.log('The user is not logged in')
        alert('The user is not logged in')
        let htmltext =  `<div class="card-body">
                <form>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <select id="provider" class="form-control">
                            <option value="https://solid.community">Solid</option>
                            <option value="http://localhost:8443">SolidLocal</option>
                            <option value="https://inrupt.net">Inrupt</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button id="button-login" type="button" class="btn float-right login_btn">Login</button>
                    </div>
                </form>
            </div> `;
        loginDiv.innerHTML = htmltext;
        logoutDiv.innerHTML = ''
        document.getElementById('button-login').onclick = function() {
            let idp = document.querySelector("#provider").value;
            alert("inside of login funtion" + idp);
            login(idp);

        }
    }
    else {
        // CARD ME + BOTON LOGOUT
       let name = getName(session.webId);
        console.log("MI NOMBRE : "+ name);
        console.log(`The user is ${session.webId}`)
        alert(`The user is ${session.webId}`)
        console.log(solid.auth);
        let htmlCard =  `<div class="card-body">
                    <img class="card-img-top" src="..." alt="Card PHOTO SOLID">
                     <div class="card-body">
                    <p class="card-text">INFO CAR ME ROL.</p>
                    <button id="button-logout" type="button" class="btn float-right login_btn">Logout</button>
                    </div>
            </div> `;
        logoutDiv.innerHTML = htmlCard;
        loginDiv.innerHTML = ''
        document.getElementById('button-logout').onclick = function() {
            solid.auth.logout().then(() => alert('Goodbye!'));
        }
    }
})


//controller
const login = async(idp) => {
    alert( "INSIDE OF login funtion" + idp)
    await solid.auth.login(idp);
    alert( "A LOGUEARSE");

}