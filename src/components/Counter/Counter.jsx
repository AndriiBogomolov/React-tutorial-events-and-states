import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
    state = {
        value: 15,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        const { value } = this.state;
        
        return (
            <div className='Counter'>
                <span className='Counter__value'>{value}</span>

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            

                {/* <div className='Counter__controls'>
                    <button type='button' onClick={this.handleIncrement}>Увеличить на 1</button>
                    <button type='button' onClick={this.handleDecrement}>Уменьшить на 1</button>
                </div> */}
            </div>
        );
    }
}

export default Counter;