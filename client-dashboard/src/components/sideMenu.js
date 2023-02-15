import {
    AppstoreOutlined,
    ShopOutlined,
    UserOutlined,
    DownloadOutlined ,
    BankOutlined,
    SettingOutlined,
    TeamOutlined ,
    StarOutlined
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
 import { useLocation, useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    
    return (
      <div className="SideMenu" style={{width:"180px"}}>
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Statics",
              key: "/statics",
              icon: <ShopOutlined />,
            },
            {
              label :"Installations",
              key:"/Installations",
              icon:<DownloadOutlined />
            },
            {
              label :"Subscription",
              key :"/Subscription",
              icon:<BankOutlined />
            },
            {
              label :"Widget",
              key :"/Widget",
              icon: <SettingOutlined />
            },
            {
              label :"Profile",
              key :"/profile",
              icon: <UserOutlined />
            }, 
            {
              label: "Customers",
              key: "/customers",
              icon: <TeamOutlined />,
            },
            {
              label: "Feedback",
              key: "/Feedback",
              icon: <StarOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenu;