import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div>
                 <label>Situation Familiale :</label> 

<select>
<option value="Celibataire">Celibataire</option>
<option value="Marie">Marie</option>
<option value="Divorce">Divorce</option>

</select>
            </div>
        );
    }
}

export default Select;