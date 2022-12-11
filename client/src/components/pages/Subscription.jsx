import React from 'react'
import {Row,Col, Table} from 'antd'
function Subscription() {
    const columns = [
        {
          title: 'No',
          dataIndex: 'No',
        },
        {
          title: 'Subscription_Type',
          dataIndex: 'SubType',
        },
        {
          title: 'Subscription_Date',
          dataIndex: 'SubDate',
         
        },
        {
          title: 'Subscription_Expiry',
          dataIndex: 'expiryDate',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
          },
          {
            title: 'Status',
            dataIndex: 'status',
          }
      ];
      const data = [
        {
          key: '1',
          No:'1',
          SubType: 'Standard',
          SubDate: '7/12/2023',
          expiryDate: '8/7/2023',
          amount:'30$',
          status:'InActive'
        },
        {
            key: '1',
            No:'1',
            SubType: 'Standard',
            SubDate: '7/12/2023',
            expiryDate: '8/7/2023',
            amount:'30$',
            status:'Active'
          },
          
        // {
        //     Sr_No: '1',
        //     Subscription_Type: 'Standard',
        //     Subscription_Date: '7/12/2023',
        //     Subscription_Expiry: '8/7/2023',
        //     Amount:'30$',
        //     Status:'Active'
        //   } 
        
      ];
  return (
    <>
    <div className='text' style={{marginLeft:'40%',marginTop:'3%',marginBottom:'2%'}} >
        <h2>Active Subscriptions</h2>
    </div>
    <div className='container' style={{backgroundColor:'#8BBDB428',height:'70%',width:'100%',padding:'1%'}}>
    {/* <Col gutter={[8, 24]} style={{marginTop:'5%',marginLeft:'40%'}}>
        <Row span={12}><h2>Subscription Type: Standard</h2></Row>
        <Row span={12}><h2>Subscription Date: 2/11/2222</h2></Row>
        <Row span={12}><h2>Expiry Date: 3/5/1212</h2></Row>
        </Col> */}
     
    
    <Table columns={columns} dataSource={data}  style={{width:'95%',marginLeft:'2%'}}/>
    </div>
    </>
  )
}

export default Subscription
