import React from 'react'
import {Row,Col, Table} from 'antd'
const Subscription=()=> {
   
        
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          
          
        },
        {
          title: 'Subscription_Type',
          dataIndex: 'type',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Subscription_Date',
          dataIndex: 'Date',
          
          ellipsis: true,
        },
        {
          title: 'Subscription_Expiry',
          dataIndex: 'expiry',
          ellipsis: true,
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          ellipsis: true,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          ellipsis: true,
        },
      ];
      const data = [
        {
          key: '1',
          no: '1',
          type: 'Standard',
          Date: '12/3/2023',
         expiry:'23/4/2023',
         amount:'23$',
         status:"InActive"
        },
        {
            key: '1',
            no: '2',
            type: 'Platinum',
            Date: '12/3/2023',
           expiry:'23/4/2023',
           amount:'23$',
           status:"Active"
          }
      ];
  return (
  
    <div className='Container' style={{backgroundColor:'#8BBDB428',padding:'1%',height:'100%',width:'100%'}}>
    <div className='text'><h1 style={{margin:'5%',marginLeft:'35%',}}>Subscription Details</h1>
    <Table columns={columns} dataSource={data}  />
    </div>

</div>
  )
}

export default Subscription


