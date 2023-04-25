import React, { useState} from 'react'

import {NavLink} from 'react-router-dom'

import {adminNavMenu} from "../../../common/moks/navigate";
import './style.css'
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <div style={{width: isOpen ? "max-content" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ЯАлина</h1>
                    {isOpen? <MenuFoldOutlined onClick={toggle} style={{marginLeft: 150}}/> : <MenuUnfoldOutlined onClick={toggle} />}
                </div>
                {
                    adminNavMenu.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

        </div>
    )
}

export default AdminSidebar