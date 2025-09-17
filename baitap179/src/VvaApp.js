import React from 'react'
import VvaUseState from './components/VvaUseState'
import VvaListStudent from './components/VvaListStudent'

export default function VvaApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Vũ Việt Anh]</h1>
        <hr/>

        <VvaUseState />

        <VvaListStudent />
    </div>
  )
}