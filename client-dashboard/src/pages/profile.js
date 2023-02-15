import React from 'react'
import {Card} from 'antd'

function Profile() {
    
  return (
    <div className= 'Container'>
<Card 
      title=<h3> "Team or Agency Name" </h3>
      extra={<a href='Edit'>Edit</a>}
      style={{
        width: '500px',
        marginLeft:'55%',
        marginTop:'15%'
      }}     
    >
      <p>Name:  Sobia Safdar</p>
      <p>Email: Sobiasafdar51@gmail.com</p>
      <p>Subscription package Name here like Standard</p>
    </Card>
    </div>
  )
}

export default Profile
