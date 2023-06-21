import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Mgo+DSMBaFt+QHJqXE1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfRF1lSXdTdUVjWnZYdw==;Mgo+DSMBPh8sVXJ1S0R+VVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jT35VdkxjWn9edXNXQQ==;ORg4AjUWIQA/Gnt2VFhiQlhPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXhTcEVqWXxecHNSQ2c=;MjMzMTg3M0AzMjMxMmUzMDJlMzBNOVl4NFZWTU9sM01JSitJUnZVZ3NRN1MzS2FzekxIZUxFTkhuZW5wUzEwPQ==;MjMzMTg3NEAzMjMxMmUzMDJlMzBJREhxNWVOWEJla0hwekI3clVKd2ozSGpHZEFvTVE2NWZqd25hWkdzaUFjPQ==;NRAiBiAaIQQuGjN/V0d+Xk9NfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdkNjUH9dcHVRTmFV;MjMzMTg3NkAzMjMxMmUzMDJlMzBpK0VkSWx1d0xQYWxvU1ZvUTZHeWhDRmQwcXY0eU55QmFTUGpVb3NKMS9BPQ==;MjMzMTg3N0AzMjMxMmUzMDJlMzBCbkE5bFN0aUY5Sld3eXptQmVwS2wxQVl5MkJjVWNrUllUSkJVK3orZDlBPQ==;Mgo+DSMBMAY9C3t2VFhiQlhPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXhTcEVqWXxecnZSTmY=;MjMzMTg3OUAzMjMxMmUzMDJlMzBBdE9vNHRoRit0N29ZTTZFb2RlcDBIZDJYUXlscHRrcno4QmRWRG82akZzPQ==;MjMzMTg4MEAzMjMxMmUzMDJlMzBjUU93Y1c4ZzFmcHhUT1p3Yk1RMjRZSHphcnFDeDV1L213aTlseFozV0pBPQ==;MjMzMTg4MUAzMjMxMmUzMDJlMzBpK0VkSWx1d0xQYWxvU1ZvUTZHeWhDRmQwcXY0eU55QmFTUGpVb3NKMS9BPQ==');
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
