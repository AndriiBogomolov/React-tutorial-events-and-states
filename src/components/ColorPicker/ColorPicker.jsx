import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    
    }
    render() {
        return (
            <div className='ColorPicker'>
                <h2 className='ColorPicker__title'>Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }, index) => {
                        const opti
                        return (
                            <button
                                key={label}
                                className='ColorPicker__option'
                                style={{ backgroundColor: color, }}
                            ></button>
                        );
                    })}
                </div>
            </div>
        );
    };
};


export default ColorPicker;