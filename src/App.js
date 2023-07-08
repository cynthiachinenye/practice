// import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import Hero from './components/Hero';
// import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import Input from './components/Input';
// import FocusInput from './components/RefsDemo';

function App() {

  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
      {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      <Hero heroName='SuperMan'/>
      <Hero heroName='joker'/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
        {/* <FocusInput/>
        <Input/>
       */}
    </div>
  );
}

export default App;
