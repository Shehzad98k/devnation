import React,{ useState } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo.jpg';
import {
    DashboardOutlined, ScheduleOutlined, UserAddOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
    //to keep the active tab
    const [activeTab, setActiveTab] = useState(1);
    //to keep a check on the collapsed state
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <Menu mode="inline" defaultSelectedKeys={[''+activeTab+'']}>
            <Menu.Item key="1" className="sidebar-item" onClick={() => setActiveTab(1)} icon={<DashboardOutlined />}>
                <NavLink to="/">Dasboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" className="sidebar-item" onClick={() => setActiveTab(1)} icon={<ScheduleOutlined />}>
                <NavLink to="/scheduler">Scheduler</NavLink>
            </Menu.Item>
            <Menu.Item key="3" className="sidebar-item" onClick={() => setActiveTab(3)} icon={<UserAddOutlined />}>
                <NavLink to="/patients">Patients</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default Sidebar
