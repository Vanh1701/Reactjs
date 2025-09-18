import React from 'react'
import VvaUseState from './components/VvaUseState'
import VvaListStudent from './components/VvaListStudent'
import VvaUseEffectDemo from './components/VvaUseEffectDemo'
import VvaExampleContext from './components/VvaExampleContext'

export default function VvaApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Trịnh Văn Chung]</h1>
        <hr/>

        {/* <VvaUseState />

        <VvaListStudent />

        <VvaUseEffectDemo /> */}

        <VvaExampleContext />
    </div>
  )
}