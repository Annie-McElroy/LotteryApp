// Lottery ball component - display only, simple child component
// Props: num for value of ball
// No state nor event - DISPLAY ONLY

import React, { Component } from 'react';
import '../Lotto.css';

class Ball extends Component {
    render() {
        return (
        <div className='Ball'>
            {this.props.num}
        </div>
        );
    }
}

export default Ball;

