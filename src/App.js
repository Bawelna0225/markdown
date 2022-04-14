var Application = React.createClass({
  getInitialState: function(){
    return {
      content: '#Markdown input\n ##subheading\n [link](link)\n \nUnordered list\n * list-item\n  * list-item-2\n\n\n Ordered list \n 1. item-1 \n 2. item-2\n\n\n Type double-underscores for __bold__ text\n\n'+ 'ASDSAd\n ==='+ '\nqwert\n ---\n'+ '>asd\n' + '![img]()\n\n'+ '`   asd`\n\n'+ '```asd ```'
    };
  },
  updateState: function(evt){
    this.setState({content: evt.target.value});
  },
  render: function(){
    return (
      <div className="row">
        <div className="cell col-sm-4">
        <textarea id="editor" onChange={this.updateState} value={this.state.content}/>
        </div>
        <div className="markdown-output" id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.content)}}/>
      </div>
    );
  }
});
var reactComponent = ReactDOM.render(React.createElement(Application), document.getElementById('root'));