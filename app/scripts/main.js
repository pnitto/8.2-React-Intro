/*var App = React.createClass({
  render(){
  return (
<div>
  <h1>Contacts</h1>
  <ul>
    <li>
      <h2>James Nelson</h2>
      <a href="mailto:james@jamesknelson.com">james@jamesknelson</a>
    </li>
    <li>
      <h2>Joe Citizen</h2>
      <a href="mailto:joe@example.com">joe@example.com</a>
    </li>
  </ul>
</div>
);
}
)}

ReactDOM.render(<App />, document.getElementById('react-app'))

*/

//Have to use "className" to define a class on an element


var newContact = {name: "", email: "", description: ""}


var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <a href={'mailto:' + this.props.email}>{this.props.email}</a>
        <p>{this.props.description}</p>
      </li>
    )
  }
});
  var ContactForm = React.createClass({
    propTypes: {
      initialContact: React.PropTypes.object.isRequired,
      onSaveContact: React.PropTypes.func.isRequired
    },
    getInitialState(){
      return {
        contact: this.props.initialContact
      }
    },
    handleChange(prop,e){
      var newData = _.object([prop], [e.target.value]);
      console.log(newData)
      this.setState({
        contact: _.extend({}, this.state.contact, newData)
      })
    },
    saveContact(e){
      e.preventDefault();
      this.props.onSaveContact(this.state.contact)
      this.setState({contact: this.props.initialContact})
    },

    render() {
      return (
        <form onSubmit={this.saveContact}>
          <input placeholder="Name" type="text" value={this.state.contact.name} onChange={this.handleChange.bind(this, 'name')} />
            <input placeholder="Email" type="email" value={this.state.contact.email} onChange={this.handleChange.bind(this, 'email')} />
              <textarea placeholder="Description" type="text" value={this.state.contact.description} onChange={this.handleChange.bind(this,'description')}></textarea>
            <button type="submit">button</button>
        </form>
      )
    }
  });

var ContactsComponent = React.createClass({
  propTypes: {
    initialContacts: React.PropTypes.array.isRequired
  },
  getInitialState(){
  return {
      newContact: {name: "", email: "", description: ""},
      contacts: this.props.initialContacts
    }
  },
  submitNewContact(contact){
    contact.key = Date.now();
    console.log(contact);
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  },
  render(){
    var listElements = this.state.contacts
      .filter(function(contact) {
        return contact.email;
      })
      .map(function(contact) {
        return <ContactItem {...contact}/>;
      });

    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {listElements}
        </ul>
        <ContactForm initialContact={this.state.newContact}  onSaveContact={this.submitNewContact} />
      </div>
    )
  }
});

var contacts = [
  {
    key: 1,
    name: "James K Nelson",
    email: "james@jamesknelson.com",
    description: "Front-end Unicorn"
  }, {
    key: 2,
    name: "Jim",
    email: "jim@example.com"
  }, {
    key: 3,
    name: "Joe"
  }
];

ReactDOM.render(<ContactsComponent initialContacts={contacts} />, document.getElementById('react-app'));
