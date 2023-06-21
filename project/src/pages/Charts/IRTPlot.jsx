import React from 'react';

import { ChartsHeader, IRT } from '../../components';


const IRTPlot = () => (
  <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#F6F6F6] rounded-3xl'>
    <ChartsHeader category="ICC"/>
    <div className="w-full">
      <IRT />
    </div>
  </div>
);

export default IRTPlot;