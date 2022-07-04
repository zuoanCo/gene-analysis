import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
// import { useNavigate  } from 'react-router-dom';

import { Card, Descriptions } from 'antd';
import { Chart } from './chart';
import { Step } from './step'
import logo from '@/assets/images/logo.png'
import Test from '@/services/test'

export const Home: React.FC = observer((props) => {
  // const navigate = useNavigate ()
  const { mindGene } = useStores()
  useEffect(() => {
    
    const params = {
      timestamp: 'string',
      appId: 'string',
      sign: 'string',
      version: 'string',
      method: 'string',
      startTime: 0,
      endTime: 0,
      timeType: 0,
    }
    Test.getList(params).then(res => {
      console.log(res)
      // navigate('/download', { state: { id: 1, name: 'hahaha' } })
    })
  }, [])

  const setGene = () => {
    mindGene.setGene({
      id: 'xxxx',
      name: 'zzk'
    })
    console.log(mindGene.currentGene)
  }

  return <Card className='height-block overflow-y-auto' hoverable>
    <Card style={{ width: '100%', borderRadius: '10px', backgroundColor: '#f0ebe7' }} hoverable>
        <div className='layout'>
          <div>
            <h4 style={{ fontWeight: 'bolder', color: '#665f54', fontSize: '24px' }}>数据库名称</h4>
            <div className='layout-column'>
              <p onClick={setGene}>数据库介绍</p>
            </div>
          </div>
        </div>
      </Card>
    <div className='layout flex-between' style={{ marginTop: '10px' }}>
      <Card style={{ width: '48%', borderRadius: '10px', backgroundColor: '#f9f6f1' }} hoverable>
        <div className='layout flex-between'>
          <div>
            <h4 style={{ fontWeight: 'bolder', color: '#665f54', fontSize: '24px' }}>Pan-cancer</h4>
            <div className='layout-column'>
              <p>section1</p>
              <p>section2</p>
              <p>section3</p>
            </div>
          </div>
          <img src={logo} alt="" />
        </div>
      </Card>
      <Card style={{ width: '48%', borderRadius: '10px', backgroundColor: '#d9cbb0' }} hoverable>
        <div className='layout flex-between'>
          <div>
            <h4 style={{ fontWeight: 'bolder', color: '#665f54', fontSize: '24px' }}>Cancer Type</h4>
            <div className='layout-column'>
              <p>section1</p>
              <p>section2</p>
              <p>section3</p>
            </div>
          </div>
          <img src={logo} alt="" />
        </div>
      </Card>
    </div>
    <div className='layout flex-itmes-center' style={{ marginTop: '10px' }}>
      <Chart />
      <div className='layout-column flex-items-center flex-center'>
        <Step />
      </div>
    </div>
  </Card>;
})
