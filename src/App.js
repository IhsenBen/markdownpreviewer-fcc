import "./App.css";

import marked from "marked";

import React, { Component } from "react";

const exemple = `

**these are tags to test the Markdown**

# Hey My Name Is 
# Ihsen Ben Ali
## I'm a Junior full-stack web-dev 
## looking for a job or an apprenticeship 





> I like Coding!


I code with
- Javascript
- SQL
- NodeJS
- C#


[Visit my Portfolio website](https://www.ihsen.dev)




This is a block of code:

\`\`\`c#
for (int Days = 0;Days = 7;Days++){
  Console.WriteLine("Code Everyday");
}
\`\`\`


I also code with \`<h1 className="YaY">React</h1>\`

![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
export default class App extends Component {
  state = {
    inputText: exemple,
  };
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    const { inputText } = this.state;

    const markdown = marked(inputText, { breaks: true });

    return (
      <div className="window">
        <div className="topBar">
          <a className="close"></a>
          <a className="hide"></a>
          <a className="fullScreen"></a>
        </div>

        <div className="input">
          <textarea
            id="editor"
            value={inputText}
            onChange={this.handleChange}
          />
        </div>

        <div className="output">
          <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
    );
  }
}
