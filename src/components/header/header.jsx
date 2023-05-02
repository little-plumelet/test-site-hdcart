import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'gatsby';
import {
  header,
  logo
} from './style.module.css';

export function Header() {

  return (
    <header className={header}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <h1 className={logo}>Wow Goodies</h1>
        </Link>
        <Space size="middle">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </Space>

        <Space size="middle">
          <Button
            shape="circle"
            icon={<SearchOutlined />}
            onClick={() => {}}
            data-testid="searchicon"
          />
          <Button shape="circle" icon={<UserOutlined />} />
        </Space>
    </header>
  );
}
