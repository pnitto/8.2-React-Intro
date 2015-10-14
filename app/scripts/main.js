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

var listElements = contacts
  .filter(function(contact) {
    return contact.email;
  })
  .map(function(contact) {
    return <ContactItem {...contact}/>;
  });

  var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
    render() {
      return (
        <form>
          <input placeholder="Name" type="text" value={this.props.contact.name}></input>
            <input placeholder="Email" type="email" value={this.props.contact.email}></input>
              <textarea placeholder="Description" type="text" value={this.props.contact.description}></textarea>
              <button type="submit">button</button>
              </form>
  )
  }
  });
var RootElement = React.createClass({
  render(){
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
          {listElements}
        </ul>
        <ContactForm contact={this.props.contact}></ContactForm>
      </div>
    )
  }
})
ReactDOM.render(<RootElement contact={newContact} />, document.getElementById('react-app'))
