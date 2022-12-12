import React from 'react'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate ,Button } from 'antd';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const Feedback = () => (
  <>
  <div  className= 'Container' style={{
        backgroundColor:'#8BBDB428' ,
         height:'100%',width:'100%', 
         backgroundImage:"url(images/2.jpg)",
          backgroundPosition:'relative',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'}} >

        <div className='box' style={{backgroundColor:'#ffffffa9',width:'33%',height:'30%', marginLeft:'23%',marginTop:'10%', position: "absolute",borderRadius:'5%'}}>
            <h2 style={{margin:'5%',marginLeft:'25%'}}>Rate our Service now</h2>

    <Rate defaultValue={5} character={({ index }) => index + 1} style={{color:'rebeccapurple',marginLeft:'40%'}}/>
    <br />
    <Rate defaultValue={5} character={({ index }) => customIcons[index + 1]} style={{color:'rebeccapurple',marginLeft:'35%'}}/>
<br/>
    <Button type="primary" htmlType="submit" style={{marginLeft:'45%',marginTop:'4%'}}>
          Submit
        </Button>
    </div>
    </div>
  </>

);
export default Feedback;



