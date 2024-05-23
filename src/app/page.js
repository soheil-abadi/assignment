// Home.jsx
'use client';

import { Provider } from "react-redux";
import Auth from "./auth/page.jsx"; 
import Dashboard from "./Home/page.jsx"; 
import { store } from "./store.js";

const Home = () => {
  return (
    <Provider store={store}>
      <div>
     
        <Auth />
       
      
        
      </div>
    </Provider>
  );
}

export default Home;
