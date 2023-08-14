import React, { Component } from "react";

class FormClass extends Component {
  state = {
    Name: "",
    Dept: "",
    Rate: "",
    EmpData: [],
  };

  changeHandle=(event)=>{
    this.setState({[event.target.name] : event.target.value});
    // console.log(this.state.Name)
    // console.log(this.state.Dept)
  }

  clickHandle = (e) =>{
    e.preventDefault();
    const newObj ={
        name : this.state.Name,
        dept : this.state.Dept,
        rate : this.state.Rate
    }
    this.state.EmpData.push(newObj);
    this.setState({EmpData : this.state.EmpData})
    // console.log(this.state.EmpData) 
  }



  render() {
    return (
      <div>
        <form action="">
        <label htmlFor="name">Name : </label>
        <input type="text" name="Name" id="name" placeholder="Enter your Name" required  value={this.state.Name} onChange={this.changeHandle}/>

        <br />  
        <br />     

        <label htmlFor="name">Department : </label>
        <input type="text" name="Dept" id="dept" placeholder="Enter your Department" required  value={this.state.Dept} onChange={this.changeHandle}/>

        <br />
        <br />

        <label htmlFor="name">Rating : </label>
        <input type="number" name="Rate" id="Rate" placeholder="Enter a Rating" required  value={this.state.Rate} onChange={this.changeHandle}/>

        <br />
        <br />


        <button type="button" onClick={this.clickHandle} className="btn">Submit</button>
        </form>
        
        {/* <hr /> */}
        <div className="content">
        {
            this.state.EmpData.map((item, index)=>{
                return(
                    <div className="item">
                        <span>Name :{item.name} | Dept : {item.dept} |  Rating : {item.rate}</span>
                    </div>
                )
            })
        }
        </div>
       
      </div>
    );
  }
}

export default FormClass;
