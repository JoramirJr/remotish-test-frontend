import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Details from './index.module.css'
import { DataContext } from '../../Contexts'
import axios from 'axios'

import { LoadingSpinner } from '../../Utils/Loading/Loading'


export function DetailsPage() {
     const { receivedEmailAPI } = useContext(DataContext)
    const { search } = useLocation()
    const [fetchedData, setFetchedData] = useState(() => [])
    const [loading, setLoading] = useState(() => false)


     useEffect(() => {

        setLoading(true)

         axios.get(`https://remotish-test.herokuapp.com/inserted-data${search}`).then(response => {

             setFetchedData(response.data)

             setLoading(false)
         }) 

     }, [])

    return (
         <div className={Details.background}>
             <table className={Details.table} >
                 <thead>
                     <tr className={Details.tableHeaderRow} >
                         <th className={Details.tableHeaderData} >EMAIL</th>
                         <th className={Details.tableHeaderData} >NAME</th>
                         <th className={Details.tableHeaderData} >AGE</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td className={Details.tableData} >{loading ? <LoadingSpinner /> : fetchedData[0]}</td>
                         <td className={Details.tableData} >{loading ? <LoadingSpinner /> : fetchedData[1]}</td>
                         <td className={Details.tableData} >{loading ? <LoadingSpinner /> : fetchedData[2]}</td>
                     </tr>
                 </tbody>
             </table>
         </div>
    )

}