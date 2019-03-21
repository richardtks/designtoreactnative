import React from 'react'

import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Iconwrapper = ({
  type, 
  ...restProps
}) => {
  switch(type) {
    case "awesome":
      return (
        <AwesomeIcon {...restProps} />
      )
    case "matt":
      return (
        <MatComIcon {...restProps} />
      )
    default:
      return
  }
}

export default Iconwrapper;
