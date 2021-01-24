import React from 'react'
import StackNavigator from './src/navigators/stackNavigator'
import {Context} from './src/screens/context'

export default function App() {
  return (
    <Context>

      <StackNavigator/>
    </Context>
  )
}