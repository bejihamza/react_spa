import React, { Component } from "react";
import Radio from "./Radio";
import Select from "./Select";
 
class Formulaire extends Component {
    render() {
        return (
            <form>
                <label>nom</label><input type="text"></input>
                <label>prenom</label><input type="text"></input>
                     <br/>
                     <Radio></Radio>
               
       <br/>

      <Select></Select>
 <br/>
 <input type="submit" value="Valider" />

            </form>

            );
        }
}


export default Formulaire;