import React from 'react'

export default function VvaFuncComp(vvaProps) {
  return (
    <div className='alert alert-danger'>
        <h2>Function Component Demo</h2>
        <h3>Welcome to, {vvaProps.name} - {vvaProps.age}</h3>
    </div>
  )
}