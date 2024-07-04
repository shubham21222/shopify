import * as React from 'react'
import '../public/globals.css'

export var CardComplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        backgroundColor: props.color,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        borderTop: `3px solid ${props.color}`,
        ...props.style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 20,
          color: 'var(--purple)',
          backgroundColor: props.color,
          gap: 20,
          width: 679,
          height: '100%',
        }}
      >
        <div
          style={{
            fontFamily: 'primary-basic',
            fontSize: '28px',
            textAlign: 'left',
            lineHeight: '1.2em',
          }}
        >
          {props.activity.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--secondary)',
            fontSize: '12px',
            textAlign: 'left',
          }}
        >
          {props.activity.description}
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
            }}
          >
            {props.activity.categories.map((category) => (
              <div
                style={{
                  backgroundColor: 'var(--purple)',
                  color: props.color,
                  padding: '2px 6px',
                  borderRadius: 3,
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            height: 'min-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            fontFamily: 'var(--secondary)',
            fontSize: '20px',
            fontWeight: '600',
            color: props.color,
            zIndex: 100,
          }}
        >
          {props.activity.date}
        </div>
      </div>
    </div>
  )
}
