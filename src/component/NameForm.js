/*
* 非受控组建
* */
import React, {Component} from "react"
import {Input} from "antd"

export default class NameForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(event, this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <Input type="text" ref={input => this.input = input}/>
          </label>
          <Input type={'submit'} value={'提交'}/>
        </form>
      </div>
    )
  }
}