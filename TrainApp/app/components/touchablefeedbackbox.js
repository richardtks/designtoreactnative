import React, { Component } from 'react'

import Box from './box';

class TouchableFeedbackBox extends Component {
  constructor (props){
    super(props);
    this.state = {
      isPressed: false,
      colors: undefined,
    }
  }

  handleOnPress = () => {
    const { onPress } = this.props

    this.setState(prevState => ({
      isPressed: !prevState.isPressed,
      colors: !prevState.isPressed ? ["#654383", "#AD4BA3"] : undefined, 
    }))

    //onPress();
  }

  render() {
    const { props } = this
    return (
      <Box 
        {...props} 
        onPress={this.handleOnPress}
        colors={this.state.colors} />
    )
  }
}

export default TouchableFeedbackBox;
