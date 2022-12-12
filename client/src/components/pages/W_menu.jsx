import React from 'react'
import { Radio, Switch,Row ,Col} from 'antd';

function W_menu() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }
  return (
    <>
     <div className='text' style={{width:'100%',marginLeft:'25%',marginTop:'3%',marginBottom:'3%'}}><h2>Customize your Website's Widget Menu </h2>
         </div>  
    <div className='container' style={{backgroundColor:'#8BBDB428',height:'70%',width:'100%'}}>
        <div className='container_1' style={{border:'red'}}>
   <Row gutter={[8, 12]} style={{marginTop:'5%',marginLeft:'12%'}}>
  <Col span={12}><h3>Screen Reader</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Voice navigation</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Bigger Size</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Background Color</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Color</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Saturation</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Monochrome</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Spacing</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Alignment</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Highlight Links</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  </Row>
  </div>
<div className='container_2' style={{boxShadow:'10'}}>
<Row gutter={[8, 12]} style={{marginTop:'5%',marginLeft:'12%'}}>
  <Col span={12}><h3>Screen Reader</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Voice navigation</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Bigger Size</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Background Color</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Color</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Saturation</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Monochrome</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Spacing</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Text Alignment</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  <Col span={12}><h3>Highlight Links</h3></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'60%'}} /></Col>
  </Row>
</div>
    </div>
    </>
  )
}

export default W_menu
