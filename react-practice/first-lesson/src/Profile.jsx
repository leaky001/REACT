import React, { useState } from 'react'

const Profile = () => {
    const [cohort,setCohort] = useState("Feranmi");
    const [age,setAge] = useState(28)
    const [status, setStatus] = useState(false)
  return (
    <div>
      <p>Name: {cohort}</p>
      <p>Age: {age}</p>
      <p>Relationship status: {single ? "single" : "dating"};
        {set}
      </p>
    </div>
  )
}

// useState with object

import React from 'react'

const User = () => {

    const [item,setItem] = useState(
        {name:"feranmi",
            age:30,
            status:"dating"

        }
    )

    const changeStatus = () => {
      if (item.status === "dating"){
        setItem({...item, status:"single"})
      } else{
        setItem({...item, status:"dating"})
      }

    }
  return (
    <div>
      <p>Name: {item.name}</p>
      <p>Age: {item.age}</p>
      <p>Status: {item.status}</p>
      <button onClick={changeStatus}>Change Me</button>
    </div>
  )
}

export {User, Profile}


export default Profile
