import React , {useState}from 'react'
import { Radio, Switch,Row ,Col} from 'antd';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Widget() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }
    const [value, setValue] = useState(1);
    const onchange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const OnChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
      };
   
  return (
    <>
   
  <Row gutter={[8, 24]} style={{marginTop:'16%',marginLeft:'12%'}}>
  <Col span={12}><h2>Enable Widget</h2></Col>
  <Col span={12}> <Switch defaultChecked onChange={onChange} style={{marginLeft:'30%'}} /></Col>

  <Col span={12}><h2>Change Widget Color</h2></Col>
  <Col span={12}> <Form.Label htmlFor="colorInput" style={{marginLeft:'30%'}}></Form.Label>
                    <Form.Control type="color" id="colorInput" defaultValue="#03A388" title="Choose your color"/>
 </Col>
 <Col span={12}><h2>Change Widget Size</h2></Col>
  <Col span={12}>  <Radio.Group onChange={onchange} style={{marginLeft:'10%'}}value={value}>
      <Radio value={1}><h3>Small</h3></Radio>
      <Radio value={2}><h3>Medium</h3></Radio>
      <Radio value={3}><h3>Large</h3></Radio>
    </Radio.Group>
 </Col>
 <Col span={12}><h2>Change Widget Position</h2></Col>
 <Col span={12}>  
 <Radio.Group onChange={OnChange} defaultValue="a">
      <Radio.Button value="a"><h3>Top Right</h3></Radio.Button>
      <Radio.Button value="b"><h3>Top Left</h3></Radio.Button>
      <Radio.Button value="c"><h3>Bottom Right</h3></Radio.Button>
      <Radio.Button value="d"><h3>Bottom Left</h3></Radio.Button>
    </Radio.Group>
 </Col>
</Row>
 </>   
  )
}
export default Widget



