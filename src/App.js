import React, {Component} from 'react';
import {Button, InputItem, List, Toast} from 'antd-mobile';
import {connect} from "react-redux";
import {addTodo, addTodoAsync, setVisibilityFilter, toggleTodo} from "./store/actions/todo";
import {add_count, add_count_async, remove_count, reset_count} from "./store/actions/couter";
import axios from 'axios';

const Item = List.Item;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.status)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.status)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateProps = state => {
  return {
    counter: state.counter,
    todos: getVisibleTodos(state.todo, state.todoFilter),
    filterType: state.todoFilter,
  }
}

const mapDispatchToProps = {
  addTodo,
  addTodoAsync,
  setVisibilityFilter,
  toggleTodo,
  add_count,
  add_count_async,
  remove_count,
  reset_count
}

@connect(mapStateProps, mapDispatchToProps)
class App extends Component {
  constructor(props) {
    super()
    this.state = {
      value: '',
    }

    axios.get('/data').then(res => {
    }).catch(err => console.log('+++++++++++++', err))
  }

  handleChange = (value) => {
    this.setState({value})
  }

  handleClick = (event) => {
    this.confirmValue();
  }
  handleClickAsync = (event) => {
    this.confirmValue('async');
  }
  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.confirmValue();
    }
  }
  confirmValue = (type = '') => {
    if (this.state.value) {
      if (type === 'async') {
        this.props.addTodoAsync(this.state.value)
        this.setState({value: ''})
      } else {
        this.props.addTodo(this.state.value);
        this.setState({value: ''})
      }
    } else {
      Toast.info('输入框不能为空')
    }
  }

  handleItem = (item) => {
    this.props.toggleTodo(item.id);
  }

  render() {
    return (
      <div className="App">
        <InputItem
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        <Button onClick={this.handleClick}>提交</Button>
        <Button onClick={this.handleClickAsync}>提交Async</Button>
        <List>
          {this.props.todos.map(item => (
            <Item
              key={item.id}
              style={{textDecoration: item.status ? 'line-through' : 'none'}}
              onClick={() => this.handleItem(item)}
            >
              {item.value}
            </Item>
          ))}
        </List>
        <div>
          <Button type={this.props.filterType === 'SHOW_ALL' ? 'primary' : 'default'}
                  onClick={() => this.props.setVisibilityFilter('SHOW_ALL')}>全部</Button>
          <Button type={this.props.filterType === 'SHOW_COMPLETED' ? 'primary' : 'default'}
                  onClick={() => this.props.setVisibilityFilter('SHOW_COMPLETED')}>未完成</Button>
          <Button type={this.props.filterType === 'SHOW_ACTIVE' ? 'primary' : 'default'}
                  onClick={() => this.props.setVisibilityFilter('SHOW_ACTIVE')}>已完成</Button>
        </div>

        <p>{this.props.counter}</p>
        <Button onClick={this.props.add_count}>+</Button>
        <Button onClick={this.props.remove_count}>-</Button>
        <Button onClick={this.props.reset_count}>reset</Button>
        <Button onClick={this.props.add_count_async}>async add</Button>
      </div>
    );
  }
}

export default App;
