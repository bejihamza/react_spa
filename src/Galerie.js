import React, { Component } from "react";
import i1 from "./image/i1.jpg"
import i2 from "./image/i2.jpg"
import i3 from "./image/i3.jpg"

class Galerie extends Component {
    render() {
        return (
            <div>
                <table>

                    <tr>
                        <td>
                        <img src={i1} width="200" height="200" />


                        </td>
                        <td>
                        <img src={i2} width="200" height="200" />

                        </td>
                        <td>
                        <img src={i3} width="200" height="200" />

                        </td>

                    </tr>
                </table>
         
</div>

            );
        }
}


export default Galerie;