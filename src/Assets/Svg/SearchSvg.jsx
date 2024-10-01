import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15.906 17.32a8 8 0 1 1 1.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387ZM17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
