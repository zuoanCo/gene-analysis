import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/store';
import { useLocation } from 'react-router-dom'

export const NotFound: React.FC =observer((props) => {
  const location = useLocation()
  const { mindGene } = useStores()

  const showGene = () => {
    console.log(mindGene.gene, props)
  }

  return <div className={ 'overflow-y-auto height-block' }>
    <p onClick={showGene}>11111111111111111111111</p>
    <p>11111111111111111111111</p>
  </div>;
}) 