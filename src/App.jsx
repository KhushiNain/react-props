import './App.css';

function App(props) {
  let dataarray= props.data()
  return (
    <div>
    <h1 className="heading">Kalvium Gallary</h1>
    <div className="container">   
    {
      dataarray.map((ele)=>{
        return <img src={`${ele.img}`} ></img>
      })
    }
  </div>
  </div>
  ) 
}

export default App;
