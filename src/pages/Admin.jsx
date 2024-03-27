import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Header from '../component/AdminDashboard/Header';
import Logo from '../images/logo.png';
import { Image } from 'react-bootstrap';

export default function admin() {
  return (
    <Splitter style={{ height: '300px' }}>
      <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        <Image src={Logo} width={150} height={100} />
      </SplitterPanel>
      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <Header />
                </div>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel size={85}>
            <Splitter>
              <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                Header 4
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  )
}

