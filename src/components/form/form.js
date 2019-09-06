import React from 'react';
import './form.css';

class InputForm extends React.Component {
  state = {
    name: '',
    phone:'',
    email:'',
    order:'',
    comment:'',
  }
  handleInputName = (event) => {
    const eventType = event.target.name;
    console.log(event.target)
    const val = event.target.value;
    switch(eventType) {
      case "name":
        this.setState({...this.state, name: val})
    }
    switch(eventType) {
      case "phone":
        this.setState({...this.state, phone: val})
    }
    switch(eventType) {
      case "email":
        this.setState({...this.state, email: val})
    }
    switch(eventType) {
      case "order":
        this.setState({...this.state, order: val})
    }
    switch(eventType) {
      case "comment":
        this.setState({...this.state, comment: val})
    }
  }
  addTodo = () => {
    fetch('http://localhost:3000/todo',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
  }
  render(){
    return(
        <div className="App">
    <div className="window">
      <input name="name" onChange={this.handleInputName} value={this.state.name} className="input" placeholder="Имя" />
      <input name="phone" onChange={this.handleInputName} value={this.state.phone} className="input" placeholder="Телефон"/>
      <input name="email" onChange={this.handleInputName} value={this.state.email} className="input" placeholder="Email"/>
      <input list="order" name="order" onChange={this.handleInputName} value={this.state.order} className="input" placeholder="Выберите тип заказа"/>
      <input name="comment" onChange={this.handleInputName} value={this.state.comment} className="text" placeholder="Комментарий"/>
      <datalist id="order">
       <option value="Генеральная уборка"/>
       <option value="Уборка после ремонта"/>
       <option value="Мытье окон и витражей"/>
       <option value="Домработница по вызову"/>
       <option value="Офисам"/>
       <option value="Магазинам и торговым центрам"/>
       <option value="Отелей"/>
       <option value="Уборка промышленных и производственных площадей"/>
      </datalist>
      <button onClick={this.addTodo} className="button">Отправить заявку</button>
    </div>
    </div>
    );
  }
}

export default InputForm;