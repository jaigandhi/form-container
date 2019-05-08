import React, { Component } from 'react';


class Todo extends Component {
    state = {
    edit: false,
    id: null,
    mockData: [
    {id:'1',Name:'abc',Id:'10101010',Moblie:'9425124648',AdhaarNo:'1234567',Email:'jai.gandhi93@gmail.com', done: false, date: new Date()}]
  }

onSubmitHandle(event) {
  event.preventDefault();

  this.setState({
    mockData: [...this.state.mockData, {
        id: event.target.Sno.value,
        Name: event.target.Name.value,
        Id: event.target.Id.value,
        Moblie: event.target.Moblie.value,
        AdhaarNo: event.target.AdhaarNo.value,
        Email: event.target.Email.value,
        done: false,
        date: new Date()
    }]
  });

  event.target.Name.value = '';
  event.target.Sno.value = '';
  event.target.Id.value = '';
  event.target.Moblie.value = '';
  event.target.AdhaarNo.value = '';
  event.target.Email.value = '';
}
onDeleteHandle() {
  let id = arguments[0];

  this.setState({
    mockData: this.state.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
      return null;
    })
  });
}

renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
         <input type="text" name="updatedItem" defaultValue={this.state.id}  className="item" />
        <input type="text" name="updatedItem1" defaultValue={this.state.Name}  className="item" />
         <input type="text" name="updatedItem2" defaultValue={this.state.Id} className="item" />
          <input type="text" name="updatedItem3"  defaultValue={this.state.Moblie} className="item" />
          <input type="text" name="updatedItem4"  defaultValue={this.state.AdhaarNo} className="item" />
          <input type="text" name="updatedItem5"  defaultValue={this.state.Email} className="item" />
        <button className="update-add-item">Update</button>
      </form>
    }
  }
onEditHandle(event) {
  this.setState({
    edit: true,
    id: arguments[0],
    Name: arguments[1],
    Id:arguments[2],
    Moblie:arguments[3],
    AdhaarNo:arguments[4],
    Email:arguments[5],
  });
}

onUpdateHandle(event) {
  event.preventDefault();

  this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['Name'] = event.target.updatedItem1.value;
           item['Id'] = event.target.updatedItem2.value;
            item['Moblie'] = event.target.updatedItem3.value;
            item['AdhaarNo'] = event.target.updatedItem4.value;
            item['Email'] = event.target.updatedItem5.value;
          return item;
        }

        return item;
      })
   });

   this.setState({
      edit: false
   });
}
onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item['done'] = true;
          return item;
        }

      return item;
    })
  });
}
     render() {
  return (
    <div>
    {this.renderEditForm()}
      <form onSubmit={this.onSubmitHandle.bind(this)}>
    <center> <h1>Name of Mentor-Dr.Bindu Gandhi</h1></center>
    <center><h2>Class B.Sc I Years</h2></center>
      <center> <input type="text" name="Sno" placeholder="Sno" className="item" />
        <input type="text" name="Name" placeholder="Name" className="item" />
         <input type="text" name="Id" placeholder="Id" className="item" />
         <input type="text" name="Moblie" placeholder="Moblie" className="item" />
          <input type="text" name="AdhaarNo" placeholder="AdhaarNo" className="item" />
          <input type="text" name="Email" placeholder="Email" className="item" /></center>
        <center><button className="btn-add-item">Add </button></center>
      </form>
     

      <table border="1" cellpadding="0" cellspacing="0" align="center">
       <tr><th>Sno</th><th>Name</th><th>Id</th><th>Moblie</th><th>AdhaarNo</th><th>Email</th></tr>
        {this.state.mockData.map(item => (
          

         <tr key={item.id}>
          <td> {item.id} </td>
           <td> {item.Name} </td>
           <td> {item.Id} </td>
           <td> {item.Moblie} </td>
           <td> {item.AdhaarNo} </td>
           <td> {item.Email} </td>
            <td><button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button></td>
            <td> <button onClick={this.onEditHandle.bind(this, item.id, item.Name,item.Id,item.Moblie,item.AdhaarNo,item.Email)}>Edit</button></td>
            <td><button className={ item.done ? 'done' : 'hidden' } onClick={this.onCompleteHandle}>Complete</button></td>
            
            </tr>  
            
                                                                                                                            
        ))}
      </table>
    </div>
  );
}
  }

export default Todo;