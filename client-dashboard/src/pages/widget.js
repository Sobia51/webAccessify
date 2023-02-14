import React , {useState}from 'react'
import { Radio, Switch,Row ,Col} from 'antd';
import { Form } from 'react-bootstrap';


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
     <div className="container" >
        <h2 style={{marginLeft:'400px',marginTop:"40px"}}>Change Widget's Setting </h2>
  <Row >
  <Col  style={{marginLeft:"300px",marginTop:"40px"}}>
    <h2>Enable Widget</h2>
    </Col>
  <Col style={{marginLeft:"200px",marginTop:"65px"}} >
     <Switch defaultChecked onChange={onChange}  /></Col>
     </Row>

      <Row >
  <Col style={{marginLeft:"300px"}}>
    <h2>Change Widget Color</h2></Col>
  <Col style={{marginLeft:"130px",marginTop:"15px"}}>
     <Form.Label htmlFor="colorInput" ></Form.Label>
     <Form.Control type="color" id="colorInput" defaultValue="#03A388" title="Choose your color"/>
 </Col>
</Row>
<Row>
 <Col style={{marginLeft:"300px"}}>
    <h2>Change Widget Size</h2></Col>
  <Col style={{marginLeft:"130px",marginTop:"15px"}}> 
   <Radio.Group onChange={onchange} value={value}>
    <Radio value={1}><h3>Small</h3></Radio>
    <Radio value={2}><h3>Medium</h3></Radio>
    <Radio value={3}><h3>Large</h3></Radio>
    </Radio.Group>
 </Col>
</Row>
<Row>
 <Col style={{marginLeft:"300px"}}>
    <h2>Change Position</h2>
</Col> 
<Col style={{marginLeft:"100px"}}>

<Radio.Group onChange={onchange} defaultValue="a">
    <Radio value="a"><h3>Top Right</h3></Radio>
    <Radio value="b"><h3>Top Left</h3></Radio>
    <Radio value="c"><h3>Bottom Right</h3></Radio>
    <Radio value="d"><h3>Bottom Left</h3></Radio>
    </Radio.Group>
 </Col>
 </Row>

</div>

 </>   
  )

}
export default Widget

