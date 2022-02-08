import React from 'react';
import SkipComponenet from './SkipComponenet'; 
import WarpComponenet from './WarpComponenet'; 
import MobileNavComponenet from './MobileNavComponenet.js'; 
import QuickMenuComponenet from './QuickMenuComponenet.js';
import GoTopComponenet from './GoTopComponenet.js';
import Validatorponenet from './Validatorponenet.js'; 



function App() {
  return (
    <React.Fragment>
       <SkipComponenet/>
       <WarpComponenet/>
       <MobileNavComponenet/>
       <QuickMenuComponenet/>
       <GoTopComponenet/>
       <Validatorponenet/>
    </React.Fragment>
  );
}

export default App;
