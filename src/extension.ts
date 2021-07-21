// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from "axios";
import {headers} from "./api_key";


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "docgenerator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('docgenerator.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		
		// Get text selection from current document
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const document = editor.document;
		const selection = editor.selection;
		let text = document.getText(selection);
		
		// Specify api url and construct payload
		const api_url = "https://api-inference.huggingface.co/models/SEBIS/code_trans_t5_base_code_documentation_generation_python_multitask_finetune"
		const data = {inputs: text, options: {'use_gpu': true}};

		// Send post request and add documentation within callback function
		axios.post(api_url, JSON.stringify(data), {headers: headers}).then(response => {
			if (editor) {
				editor.edit(editBuilder => {
					editBuilder.insert(selection.start, "# " + response.data[0]["summary_text"] + "\n")
				})
			};
		});

		//vscode.window.showInformationMessage(text);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
