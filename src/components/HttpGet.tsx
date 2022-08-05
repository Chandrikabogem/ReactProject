import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HttpGet = () => {
    const [name,setName]:any=useState();
    const[email,setEmail]:any=useState();
const [data,getData]:any=useState();
/* console.log(data) */

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
getData(response.data)

/*  console.log(response.data)  */
})
.catch((error)=>{
console.log(error.message)
})
},[])


const del=(id:any)=>{
    console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((response)=>{
console.log(response)

/* console.log(response.data) */
})
.catch((error)=>{
console.log(error.message)
})

}


const put=(id:any)=>{
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{name,email})
    .then((response)=>{
    console.log(response)
    
    /* console.log(response.data) */
    })
    .catch((error)=>{
    console.log(error.message)
    })
}

const post=()=>{
    axios.post(`https://jsonplaceholder.typicode.com/users`,{name,email})
    .then((response)=>{
    console.log(response)
    
    /* console.log(response.data) */
    })
    .catch((error)=>{
    console.log(error.message)
    })
}





  return (
    <div className='app'>



            
   <h1>Table</h1>
       
         <table className='app'>
          <tbody>
              <tr>
                  <th>
                  Id
                  </th>
                  <th>
                      Name
                  </th>
                  <th>
                    Username
                  </th>
                  <th>
                  email
                  </th>

                  <th>
                      Delete
                  </th>
                  <th>
                      Put
                  </th>
                
                 
              </tr>
          {/*  {obj.map((val)=>val.name)} */}
          {data?.map((val:any, key:number) => {
          return (
            <tr key={key}>
               <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
             
<td><button onClick={()=>del(val.id)}>Delete</button>

    </td>
    <td><button onClick={()=>put(val.id)}>Update</button></td>
   
             
            </tr>
          )
        })}
        

          </tbody>
      </table>


<div>
    <h1>Form</h1>
<input type="text" className='fields '  onChange={(e)=>setName(e.target.value)} placeholder="enter your name "/><br/>
        <input type="text"  className='fields my-3'  onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email"/><br/>
</div>

      <button onClick={post}>Post</button>
    
    </div>
  )
}

export default HttpGet
