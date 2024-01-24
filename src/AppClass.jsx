import { Component } from "react";
import "./App.css"
export default class AppClass extends Component{
  
  render(){
    let dataArr= this.props.data();
    return (
    <div>
      <h1 className="heading">Kalvium Gallary</h1>
      <div className="container">
        {
          dataArr.map((ele)=>{
            return <img key={ele.id} src={ele.img} alt={ele.img}></img>
          })
        }
      </div>

    </div>
    )
  }
}
