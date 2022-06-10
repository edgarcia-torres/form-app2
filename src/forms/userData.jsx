import React, { useState, useEffect } from 'react'
//handleSubmit 

const UserDataForm=()=>{
    const [userData, setUserData]=useState({})
    //user data contains 

    const handleSubmit=(e)=>{//you get the event e as parameter
        e.preventDefault()//default is reloading the complete page 
        console.log("submitting he form", JSON.stringify(userData))

    }

    const handleChange=(e)=>{//received the event => based in input we act acondingly 
        console.log("changing the input")
        //destruction -e{target}  => we get target out of event   //we call this destruction
        const {name}=e.target

        let value = null

        if(e.target.type ==='checkbox'){
            value=e.target.checked
        }else{
            value=e.target.value
        }
        setUserData(userData=>{
            return{...userData, [name]:value}//this is how we pass the key, name is the key 
        })
    }

    //useeffect goes after all methods 
    useEffect(()=>{
        setUserData({
            fullName:'Jhon Smith',
            program: 'CPP',
            campus: 'Markham',
            enrolled: true,
            housin: 'campus'
        })
    },[])

    if(!userData) return null

    return (
        <form onSubmit={handleSubmit}>
            <label>Full Name: 
            <input type='text' name='fullName' value={userData.name} onChange={handleChange}/>
            </label>
            <br />
            <br />
            <label>Campus:
                <select name ='campus' value={userData.campus} onChange={handleChange}>
                    <option value='king'>King</option>
                    <option value='Markham'>Markham</option>
                    <option value='Newnham'>Newnham</option>
                    <option value='Downtown'>Downtown</option>
                </select>
            </label>
            <br />
            <br />
            <label>
                Enrolled:
                <input name ='enrolled' type='checkbox' checked={userData.enrolled} onChange={handleChange} />
            </label>
            <br />
            <br />
            <button  type='Submit'>
                Submit
            </button>
        </form>
    )
}


export default UserDataForm