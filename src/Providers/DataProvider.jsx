
import { useState } from 'react'

import { DataContext } from '../Contexts'

export function DataProvider({ children }) {
    const [insertedData, setInsertedData] = useState(() => ({ email: '', name: '', age: null }))
    const [receivedEmailAPI, setReceivedEmailAPI] = useState(() => '')

    return (
        <DataContext.Provider value={{ insertedData, setInsertedData, receivedEmailAPI, setReceivedEmailAPI }}>
            {children}
        </DataContext.Provider>
    )

}
