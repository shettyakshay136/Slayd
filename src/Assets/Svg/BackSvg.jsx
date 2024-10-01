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
      d="m5.828 5.95 2.536 2.535L6.95 9.9 2 4.95 6.95 0l1.414 1.414L5.828 3.95H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H5.828Z"
    />
  </Svg>
)
export default SvgComponent
