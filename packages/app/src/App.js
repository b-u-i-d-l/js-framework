import { HashRouter } from 'react-router-dom'
import React from 'react'
import '@dfohub/design-system/dist/index.cjs.css'
import '@dfohub/components/dist/index.cjs.css'
import {
  PluginsContextProvider,
  Web3ContextProvider,
  InitContextProvider,
} from '@dfohub/core'
import samplePlugin from '@dfohub/sample-plugin'
import listPagePlugin from '@dfohub/list-page-plugin'
import AppRouter from './router'
import './app.css'

function App() {
  return (
    <InitContextProvider
      initMethod={async ({ setReady, setValue }) => {
        // This line as only a demo purpose, to show the loading action
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await fetch(
          `${process.env.PUBLIC_URL}/data/context.json`
        )
        const context = await response.json()
        setValue('context', context)
        setReady()
      }}
      Loading={() => <div>Loading...</div>}
      Error={({ error }) => <div>Error on application init: {error}</div>}>
      <Web3ContextProvider>
        <PluginsContextProvider plugins={[samplePlugin, listPagePlugin]}>
          <HashRouter>
            <AppRouter />
          </HashRouter>
        </PluginsContextProvider>
      </Web3ContextProvider>
    </InitContextProvider>
  )
}

export default App
