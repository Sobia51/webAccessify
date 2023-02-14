import React from 'react';
import {Col,Row} from 'antd'

const Installations = () => (
  <div className="container">
    <div className='card' 
    style={{
        height:'100%',
        width:'120%',
        marginTop:'20%',
        backgroundColor:'#FEFFFFDA',
        marginLeft:'70%',
        borderRadius:'6%',
        padding:'2%'

        }}
        >
            <Col gutter={[8,24]}>
            <Row span={12}>
<h2 style={{marginLeft:'25%'}}> Widget Embedded Script</h2>
            </Row >
            <Row span={12}>
<h4>Place the following script just before the body tag on your website</h4>
            </Row>
            <Row span={12}>
            <div className='code' 
    style={{
        height:'60%',
        width:'50%',
        marginTop:'3%',
        backgroundColor:'#343636D2',
        marginLeft:'22%',
        marginBottom:'10%',
        borderRadius:'6%',
        padding:'2%'

        }}
        ></div>
            </Row>
            </Col>
    </div>
    
  </div>
);
export default Installations;