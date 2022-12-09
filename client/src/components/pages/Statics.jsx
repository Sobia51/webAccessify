import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Features',
    dataIndex: 'feature',
  },
  {
    title: 'No_of_User',
    dataIndex: 'user',
  },
  {
    title: 'Time_Spent',
    dataIndex: 'time',
   
  },
  {
    title: 'Status',
    dataIndex: 'Status',
  }
];
const data = [
  {
    key: '2',
    feature: 'Brightness',
    user: 7,
    time: '9hrs',
    Status:'Active'
  },
  {
    key: '3',
    feature: 'Contrast',
    user: 8,
    time: '12hrs',
    Status:'Active'
  },
  {
    key: '1',
    feature: 'Alignment',
    user: 24,
    time: '42hrs',
    Status:'Active'
  },
  {
    key: '1',
    feature: 'Brightness',
    user: 4,
    time: '2hrs',
    Status:'Active'
  },
  {
    key: '1',
    feature: 'Brightness',
    user: 4,
    time: '2hrs',
    Status:'Active'
  },
  {
    key: '1',
    feature: 'Brightness',
    user: 4,
    time: '2hrs',
    Status:'Active'
  },
  
];

const Statics = () => 

    <div className='Container' style={{backgroundColor:'#8BBDB428',padding:'1%',height:'100%',width:'100%'}}>
        <div className='text'><h2 style={{margin:'5%',marginLeft:'20%',}}>Have a look on statics of each feature on your website</h2>
        <Table columns={columns} dataSource={data}  />
        </div>

</div>

export default Statics;

