import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class MyEditor extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleKeyCommand = this.handleKeyCommand.bind(this);
	//   }
	//   // ...
	
	//   handleKeyCommand(command: string): DraftHandleValue {
	// 	if (command === 'myeditor-save') {
	// 	  // Perform a request to save your contents, set
	// 	  // a new `editorState`, etc.
	// 	  return 'handled';
	// 	}
	// 	return 'not-handled';
	//   }
	
	//   render() {
	// 	return (
	// 	  <Editor
	// 		editorState={this.state.editorState}
	// 		handleKeyCommand={this.handleKeyCommand}
	// 		keyBindingFn={myKeyBindingFn}

	// 	  />
	// 	);
	//   }
}

export default MyEditor;