import { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Forms from './index.module.css'

import { DataContext } from '../../Contexts'
import axios from 'axios'

export function FormsPage() {
    const { insertedData, setInsertedData, receivedEmailAPI, setReceivedEmailAPI } = useContext(DataContext)
    const [error, setError] = useState(() => ({ email: false, name: false, age: false }))
    const notify = () => toast.success("The data has been submitted!", {
        position: toast.POSITION.BOTTOM_CENTER
    })
    const [showDetailsLink, setShowDetailsLink] = useState(() => false)


    const onSubmit = (event) => {

        event.preventDefault()

        // !insertedData.name && setError(prev => ({  ...prev, name: true }))   
        // !insertedData.email && setError(prev => ({  ...prev, email: true }))        
        // !insertedData.age && setError(prev => ({  ...prev, age: true }))  

        axios.post('https://remotish-test.herokuapp.com/insert-data', insertedData).then(response => {

            setReceivedEmailAPI(response.data.email)

            notify()

            setShowDetailsLink(true)
        })


    }

    return (

        <div className={Forms.background} >
            <div className={Forms.formDiv} >
                <form className={Forms.form} onSubmit={onSubmit}>

                    <input required className={error.email ? Forms.inputFieldError : Forms.inputField} type="email" placeholder="EMAIL" onBlur={e => setInsertedData(prev => ({ ...prev, email: e.target.value }))} />

                    <input required className={error.name ? Forms.inputFieldError : Forms.inputField} type="text" placeholder="NAME" onBlur={e => setInsertedData(prev => ({ ...prev, name: e.target.value }))} />

                    <input required className={error.age ? Forms.inputFieldError : Forms.inputField} type="number" placeholder="AGE" onBlur={e => setInsertedData(prev => ({ ...prev, age: e.target.value }))} />

                    <button className={Forms.submitButton} >SEND DATA</button>



                </form>

            </div>
            {showDetailsLink && <Link className={Forms.ActionLink} to={{ pathname: '/details', search: `email=${receivedEmailAPI}` }}>Visualize Submitted Data</Link>}
            <ToastContainer />
        </div>

    )

}