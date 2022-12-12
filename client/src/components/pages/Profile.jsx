import React from 'react'
import {Card} from 'antd'
import Edit from '../Edit'
function Profile() {
    
  return (
    <div className= 'Container' style={{backgroundColor:'#8BBDB428',padding:'1%',height:'100%',width:'100%'}}>
<Card 
      title=<h3> "Team or Agency Name" </h3>
      extra={<a href='Edit.jsx'>Edit</a>}
      style={{
        width: '40%',
        marginLeft:'25%',
        marginTop:'5%'
      }}
      
    >
      <p>Name: Your Name</p>
      <p>Email: Your Email</p>
      <p>Subscription package Name here</p>
    </Card>



    </div>
  )
}

export default Profile
