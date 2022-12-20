import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

function Edit() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className= 'Container' style={{
        backgroundColor:'#8BBDB428' ,
         height:'100%',width:'100%', 
         backgroundImage:"url(images/2.jpg)",
          backgroundPosition:'relative',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'}}>

<div className='box'  style={{width:'45%' ,height:'60%',backgroundColor:'#ffffffa9' , marginTop:'5%',position:"absolute", marginLeft:'20%',BackgroundSize:'contain'}}>
    <h2 style={{marginLeft:'40%',marginTop:'5%',marginBottom: '10%'}}>Edit Profile</h2>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
      style={{marginTop:'5%',marginRight:'15%'}}
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item style={{marginRight:'15%'}}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item style={{marginRight:'15%'}}
        label="NewPassword"
        name="Newpassword"
        rules={[
          {
            required: true,
            message: 'Please input your Updated password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Update Profile
        </Button>
      </Form.Item>
    </Form>
        </div>
        </div>
  )
}
export default Edit
