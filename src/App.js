
import './App.css';
// import Azaxcall from './components without hooks/ajaxcall';
// import Counter from './components without hooks/counter.js'
// import Incrementer from './components with hooks/counter.js'
import NewsApp from './components with hooks/newsApp';
// import AzaxcallwithHook from './components with hooks/ajaxcall';

function App() {
  return (
   <div>
     {/* non hooks  PS:uncomment to test code*/}
     {/* <Counter/> */}
     {/* <Azaxcall/> */}



     {/* with hooks */}
     {/* <Incrementer/> */}
     {/* <AzaxcallwithHook/> */}
     <NewsApp/>


   </div>
  );
}

export default App;
