import React from 'react';

class ContainerAssignForm extends React.Component {
    constructor() {
       super();
       this.state = {
           id: null
        };
    }
    handleChange = (event) => {
       this.setState({id: event.target.value});
    }
    handleSubmit = (event) => {
       //Make a network call somewhere
       event.preventDefault();
    }
    render() {
       return( 
          <form onSubmit={this.handleSubmit}>
            <TextField floatingLabelText="ID Number" onChange={this.change} />      
            <RaisedButton label="Submit" type="submit" />
          </form>
       )
    }
  }