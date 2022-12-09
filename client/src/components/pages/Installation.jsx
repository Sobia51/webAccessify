import React from 'react';
import {Col,Row} from 'antd'

const Installation = () => (
  <div className="container" style={{backgroundColor:'#8BBDB428',height:'100%',width:'100%'}}>
    <div className='card' 
    style={{
        height:'30%',
        width:'43%',
        marginTop:'13%',
        backgroundColor:'#FEFFFFDA',
        marginLeft:'25%',
        borderRadius:'6%',
        padding:'2%'

        }}
        >
            <Col gutter={[8,24]}>
            <Row span={12}>
<h2 style={{padding:'3%',marginLeft:'17%'}}> Widget Embedded Script</h2>
            </Row >
            <Row span={12}>
<h4>Place the following script just before the body tag on your website</h4>
            </Row>
            <Row span={12}>
            <div className='code' 
    style={{
        height:'60%',
        width:'50%',
        marginTop:'13%',
        backgroundColor:'#343636D2',
        marginLeft:'22%',
        borderRadius:'6%',
        padding:'2%'

        }}
        ></div>
            </Row>
            </Col>
    </div>
    
  </div>
);
export default Installation;