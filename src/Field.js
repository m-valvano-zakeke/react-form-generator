import React, { Component } from 'react';
import './FormBuilder.css';

class Field extends Component {
    render() {
        return (
            <div draggable="true" className="field fieldToDrag" data-type-field={this.props['data-field']['typeInput']} title="Drag element to add it">
                <span>
                    {this.props['data-field']['classIcon']?(<i className='material-icons'>{this.props['data-field']['classIcon']}</i>):("")}
                    {this.props['data-field']['label']}</span>
            </div>
    );
    }
}

export default Field;
