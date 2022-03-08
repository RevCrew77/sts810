import React, { useContext, useState } from 'react'

const TranslateContext = React.createContext()
const TranslateUpdateContext = React.createContext()

export function useTranslate() {
  return useContext(TranslateContext)
}

export function useTranslateUpdate() {
  return useContext(TranslateUpdateContext)
}

export function TranslateProvider({ children }) {
  const [english, setEngilsh] = useState(true)

  function toggleTranslate() {
    setEngilsh((prevEnglish) => !prevEnglish)
  }

  return (
    <TranslateContext.Provider value={english}>
      <TranslateUpdateContext.Provider value={toggleTranslate}>
        {children}
      </TranslateUpdateContext.Provider>
    </TranslateContext.Provider>
  )
}
