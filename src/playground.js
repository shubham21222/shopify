import * as React from 'react'
import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
      }}
    >
      <div
        style={{
          height: 150,
          position: 'absolute',
          left: 154,
          top: 134,
        }}
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ height: '100%' }}
        />
      </div>
    </div>
  )
}
