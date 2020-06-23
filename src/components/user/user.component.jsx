import React, { Component } from "react";
import Header from "../header/header.component.jsx";
import "./user.style.sass"

class User extends Component {

    render() {
        if (typeof (Storage) === "undefined") {
            alert("Su navegador no soporta guardar valores por lo que la pagina no funcionara correctamente");
        }

        let user = JSON.parse(localStorage.getItem("identity"));
        console.log(user.name)
        return (
            <React.Fragment>
                <Header></Header>
                <div id="userComponent">
                    <img id="imgPrincipal" src="https://img.freepik.com/vector-gratis/tiendas-cerradas-debido-pandemia_23-2148498000.jpg?size=626&ext=jpg" alt="" />
                    <img id="imgUser" src="https://vignette.wikia.nocookie.net/fritolay/images/6/6e/Pepito_Logo.png/revision/latest/scale-to-width-down/340?cb=20150924030010&path-prefix=es" alt="" />

                    <h1>{user.name + " " + user.surname}</h1>
                    <h2>DESCRIPCIÓN</h2>
                    <span>CALIFICACION: 5/5</span>
                    <h1>TIENDA</h1>
                    {
                        /*<img src="https://img.freepik.com/vector-gratis/tiendas-cerradas-debido-pandemia_23-2148498000.jpg?size=626&ext=jpg" alt=""/>
                     */
                    }
                    <div>
                        <ul>
                            <li>No me gusto ahr - Pepe</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User