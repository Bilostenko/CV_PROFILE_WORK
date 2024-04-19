import React, { useState } from 'react';
import './worklist.css';
import { myWorkList } from '../../../data/data';
import { Button, Drawer, theme } from 'antd';

const WorkList = () => {
  const { token } = theme.useToken();
  const workList = myWorkList().worklist.new;
  const [openDrawerIndex, setOpenDrawerIndex] = useState(null);

  const showDrawer = (index) => {
    setOpenDrawerIndex(index);
  };

  const onClose = () => {
    setOpenDrawerIndex(null);
  };

  return (
    <>
      <ul className="work__list">
        {workList.map((item, index) => (
          <li className="work__item" key={index}>
            <div className="drawer-container">
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <Button type="primary" onClick={() => showDrawer(index)} className="open-button">
                Details...
              </Button>
              <Drawer
                title={`${item.name} (${item.tools})`}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={openDrawerIndex === index}
                getContainer={false}
                style={{ position: 'absolute', top: 0, right: 0, width: '80%' }}
              >
                <p className='work__description'>{item.description}</p>
                <p>
                  <a href={item.linkPage} target="_blank" rel="noopener noreferrer">Link to Page</a>
                </p>
                <p>
                  <a href={item.linkRepo} target="_blank" rel="noopener noreferrer">Link to Repo</a>
                </p>
              </Drawer>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
};

export default WorkList;
