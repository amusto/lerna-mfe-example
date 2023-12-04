import React, {Suspense} from "react";
// const RemoteApp = React.lazy(() => import("app2/App"));
// const RemoteNavigationApp = React.lazy(() => import("app3/App"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        {/*<RemoteApp/>*/}
        {/*<RemoteNavigationApp />*/}
      </Suspense>
    </div>)
}


export default App;
