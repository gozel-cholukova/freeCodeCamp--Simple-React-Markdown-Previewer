class App extends React.Component {
  state = {
    markdown: ''
  };
  
  handleChange = (e) => {
    this.setState({
      markdown: e.target.value
    });
  }
  
  render() {
    const { markdown } = this.state;
    
    return (
      <div>
        <h1 className="text-center mt-4">Convert your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5>Enter your markdown here:</h5>
            <textarea className="form-control" id="editor" value={markdown} onChange={this.handleChange}/>
          </div>
          
          <div className="col-6 preview" id="preview">
              <h5>See the result:</h5>
            <p>Hello</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
