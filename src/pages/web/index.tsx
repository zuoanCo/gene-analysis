// import {ConfigProvider} from 'antd';
// import zhCN from 'antd/lib/locale/zh_CN';


// import {WebLayout} from '@/routes/WebLayout';



// function App() {
//   return (
//     <ConfigProvider locale={zhCN}>
//       <WebLayout />
//     </ConfigProvider>
//   );
// }

// export default App;

import React, {FC, useEffect} from 'react';
import { HashRouter} from 'react-router-dom';
import RoutesConfig from "@/routes/router";
import RouterGuard from "@/routes/routerGuard"

const App:FC<any> = () =>{

  return (
    <div className="App">
      <HashRouter>
        <RouterGuard routerConfig={RoutesConfig} />
      </HashRouter>
    </div>
  );
}

export default App;
