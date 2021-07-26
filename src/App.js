import "./App.css";

import marked from "marked";

import React, { Component } from "react";

const exemple =`
This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3


[Visit my website](https://www.ihsen.dev)

This is a inline \`<div></div>\`
This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;
export default class App extends Component {

  
  state = {
    inputText: exemple
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
      <div className="container">
        <div className="inputPreview">
          <textarea
            id="editor"
            value={inputText}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <div
            id="preview"
            className="outputPreview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          />
        </div>
      </div>
    );
  }
}
