import React from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import '../AdminDashboard/Header.css';
import Topheader from "./Topheader";
import Chart from "./Chart";

const Header = () => {

  return (
    <Splitter style={{ height: '300px' }}>
      <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        <h1>Logo</h1>

      </SplitterPanel>
      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
            <div className='container'>
              <div className='row'>
                <Topheader />
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel size={85}>
            <Splitter>
              <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                <Chart />
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  )
}

export default Header
