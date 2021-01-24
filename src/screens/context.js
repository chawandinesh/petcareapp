import React from 'react'

const initialData = {
    "Pets":[],
    "Livestock":[],
    "Beasts of burder": []
}

export const PetContext = React.createContext(null)
function Context(props) {
    const [state,setState] = React.useState(initialData)
    return (
        <PetContext.Provider value={{state,setState}}>
           {props.children}
        </PetContext.Provider>
    )
}

export {Context}
