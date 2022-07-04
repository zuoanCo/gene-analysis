import React from 'react'
import MindGene from "./mindGene";

export const storesContext = React.createContext({
    mindGene: new MindGene(),
})

export const useStores = () => React.useContext(storesContext)