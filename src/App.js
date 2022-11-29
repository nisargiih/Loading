import React,{Suspense} from "react"
import './App.css';
import Loading from "./loading";


const ProfilePage = React.lazy(() => delayForDemo(import('./demo')));


function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve,2000);
  }).then(() => promise);
}

// const Loader = () => <div className="fallback"></div>;
function App() {
  return (
    <div className="App">

      <Suspense fallback={<Loading />}>
        <ProfilePage />
      </Suspense>

    </div>
  );
}

export default App;
