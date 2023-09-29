import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//-------API calls in React---------------------//
class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employees:[]
    };
  }
  componentDidMount(){
    debugger;
    fetch('https://localhost:44369/weatherforecast', {    
      method: 'GET',        
      crossorigin: true,    
      mode: 'no-cors'       
    }).then(
      response=>{
        console.log(response);
        //this.setState({employees:response});
      }
    )
  }
  render(){
    return <div>
      <h2>Employee Details...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        {/* <tbody>
          {this.state.employees.map(emp=>(
            <tr key={emp.Id}>
              <td>{emp.Id}</td>
              <td>{emp.Name}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  }
}
const element=<Employee></Employee>
ReactDOM.render(element,document.getElementById("root"));

//-------Iterating through list----------------------//
// function Employee(props){
//   debugger;
// return <div style={{border: "3px solid red"}}>
//   <p>
//     <label>Employee Id:<b>{props.data.Id}</b></label>
//   </p>
//   <p>
//     <label>Name:<b>{props.data.Name}</b></label>
//   </p>
//   <p>
//     <label>Location:<b>{props.data.Location}</b></label>
//   </p>
//   <p>
//     <label>Salary:<b>{props.data.Salary}</b></label>
//   </p>

// </div>
// }
// function DisplayEmployee(props){
//   debugger;
//   const empList=props.employeeList;
//   const listElements=empList.map((emp)=>
//     <Employee key={emp.Id} data={emp}></Employee>
//   );
//   return (<div>
//     {listElements}
//   </div>);
// }
// const employees=[
//   {Id:1,Name:'Dedeepya',Location:'Hyderabad',Salary:10000},
//   {Id:2,Name:'Navya',Location:'Banglore',Salary:20000}
// ];
// const element=<DisplayEmployee employeeList={employees}></DisplayEmployee>
// ReactDOM.render(element,document.getElementById("root"));

//--------Inteaction Between nested components: using Context--------------//
// const employeeContext=React.createContext();
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       Id:1,
//       Name:"Dedeepya",
//       Location:"Hyderabad",
//       Salary:10000
//     };
//   }
//    render(){
//     return<div>
//       <h2>Welcome to App component</h2>
//       <p>
//         <label>EmployeeId : <b>{this.state.Id}</b></label>
//       </p>
//       <employeeContext.Provider value={this.state}>
//       <Employee></Employee>
//       </employeeContext.Provider>
//     </div>

//   }
// }
// class Employee extends React.Component{
//   static context = employeeContext;
//   render(){
//     return<div>
//       <h2>Welcom to Employee component........</h2>
//       <p>
//         <label>EmployeeId : <b>{this.context.Id}</b></label>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }
// class Salary extends React.Component{
//   static context = employeeContext;
  
//   render(){
//     return<div>
//       <h2>Welcome to Salary component........</h2>
//       <p>
//         <label>EmployeeId : <b>{this.context.Id}</b></label>
//       </p>
//     </div>
//   }
// }
// const element=<App></App>
// ReactDOM.render(element,document.getElementById("root"));

//---------Interaction Between Components: using call back methods-----------//
// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       updatedSalary:null
//     };
//   }
//   getUpdatedSalary=(salary)=>{
//     this.setState({updatedSalary:salary});
//   }
//   render(){
//     return <div>
//         <h1>Employee Details....</h1>
//     <p>
//       <label>EmployeeId: <b>{this.props.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b>{this.props.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location: <b>{this.props.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary: <b>{this.props.Salary}</b></label>
//     </p>
//     <p>
//       <label>Updated Total Salary<b>{this.state.updatedSalary}</b></label>
//     </p>
//     <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance} onSalaryChange={this.getUpdatedSalary}></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       basic:this.props.BasicSalary,
//       hra:this.props.HRA,
//       spa:this.props.SpecialAllowance
//     }
//   }
//   updateSalary=()=>{
//     let salary=parseInt(this.refs.b.value)+parseInt(this.refs.h.value)+parseInt(this.refs.s.value);
//     this.props.onSalaryChange(salary) // call back methos
//   }
//   render(){
//     return <div>
//         <h1>Salary Details....</h1>
//     <p>
//       <label>Basic Salary: <input type='text' ref="b" defaultValue={this.state.basic}></input></label>
//     </p>
//     <p>
//       <label>HRA: <input type='text' ref="h" defaultValue={this.state.hra}></input></label>
//     </p>
//     <p>
//       <label>Special Allowance: <input type='text' ref="s" defaultValue={this.state.spa}></input></label>
//     </p>
//     <button onClick={this.updateSalary}>Update</button>
//     </div>
//   }
// }
// const element=<Employee Id="1" Name="Dedeepya" Location="Hyderabad" Salary="50000" BasicSalary="30000" HRA="15000" SpecialAllowance="5000"></Employee>
//  ReactDOM.render(element, document.getElementById("root"));


//----------------------------------------------------------------------------------//
//---------State in React Component class ----------//
// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message:''
//     };
//   }
//   onMessageChange(text){
//     this.setState({
//       message:'Message has '+text.length+' characters'});
//   }
//   render(){
//     return <div>
//       <h1>Counter Component.................</h1>
//       <p>
//         <lable>Enter Message <input type='text' onChange={e=>this.onMessageChange(e.target.value)}></input></lable>
//       </p>
//       <p>
//         <label>{this.state.message}</label>
//       </p>
//       <Employee></Employee>
//     </div>

//   }
// }

// class Employee extends React.Component{
//   state={counter:0}
//   addEmployee=()=>{
//     this.setState({counter:this.state.counter+1});
//     //this.counter=this.counter+1;
//     //alert('employee button clicked') 
//     //alert('button clicked '+this.counter+' times');
//   }
//   render(){
//     return <div>
//       <h1>
//         Employee Component.....
//       </h1>
//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>
//       <p>
//         <label>buttun clicked <b>{this.state.counter}</b> times</label>
//       </p>
//     </div>
//   }
// }
// const element=<CountCharacters></CountCharacters>
// ReactDOM.render(element, document.getElementById("root"));

//-------------------------------------------------------------------------------//
//---------Creating Class Component---------------//
// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(props);
//   }
//   render(){
//     return <div>
//         <h1>Employee Details....</h1>
//     <p>
//       <label>EmployeeId: <b>{this.props.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b>{this.props.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location: <b>{this.props.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary: <b>{this.props.Salary}</b></label>
//     </p>
//     <Department deptName={this.props.deptName} deptHead={this.props.deptHead}></Department>
//     </div>
//   }
// }

// class Department extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(props);
//   }
//   render(){
//     return <div>
//       <h2>Department Details....</h2>
//       <p><label>Dept Name: <b>{this.props.deptName}</b></label></p>
//       <p><label>Dept Head: <b>{this.props.deptHead}</b></label></p>
//     </div>
//   }
// }

// const element=<Employee Id="1" Name="Dedeepya" Location="Hyderabad" Salary="1cr" deptName="DAS" deptHead="Priyanka"></Employee>
// ReactDOM.render(element, document.getElementById("root"));

//-----------------------------------------------------------------------------//
// --------Creating Function Component -------------//

// var DisplayEmployeeInfo=(employee)=>{
//   return <div>
//     <h1>Employee Details</h1>
//     <p>
//       <label>EmployeeId: <b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location: <b>{employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary: <b>{employee.Salary}</b></label>
//     </p>
//     <DepartmentInfo deptName={employee.deptName} deptHead={employee.deptHead}></DepartmentInfo>
//   </div>;
// }

// const DepartmentInfo =(deptInfo)=>{
//   return <div>
//     <p>
//       <label>Dept Name: <b>{deptInfo.deptName}</b></label>
//     </p>
//     <p>
//       <label>Dept Head is: <b>{deptInfo.deptHead}</b></label>
//     </p>
//   </div>;
// }

// const element=<DisplayEmployeeInfo deptName="DAS" deptHead="Omnia" Id="1" Name="Dedeepya" Location="Hyderabad" Salary="1cr"></DisplayEmployeeInfo>

// ReactDOM.render(element, document.getElementById("root"));


//------------------------------------------------------------------------------------------------//

//--------Creating Elements with JSX------//
// const element=<h1 className="h1">Welcome to First React App......</h1>;
// ReactDOM.render(element,document.getElementById("root"));
// Creating Element using JSX
// const newElement=(
//   <div>
//     <h1>Learn React....</h1>
//     <h1>Understanding the creation of elements in react</h1>
//   </div>
// )
//ReactDOM.render(newElement, document.getElementById("root"));

//--------Creating Elements with out JSX--------------//
// const element=React.createElement("div", null,
// React.createElement("h1", null,"Learn React......"),
// React.createElement("h1", null, "Understanding the creation of elements in react")
// )
// ReactDOM.render(element, document.getElementById("root"));