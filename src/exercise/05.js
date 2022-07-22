// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each of these and apply the correct class names

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const sizes = {
  small: 'box--small',
  medium: 'box--medium',
  large: 'box--large',
}

const Box = ({size, style, className = '', ...props}) => {
  return (
    <div
      className={formatClassName()}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )

  function formatClassName() {
    return `box ${getSizeClassName(size)} ${className}`.trim()
  }
}

function getSizeClassName(size) {
  return sizes[size] ?? ''
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
