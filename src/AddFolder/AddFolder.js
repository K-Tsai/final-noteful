import React, {Component} from 'react';

class AddFolder extends Component {

 handleSubmit(event) {
	event.preventDefault();
 }

  render() {
    return (
			<form className="addFolder" onSubmit={e => this.handleSubmit(e)}>
				<h2>Add Folder</h2>
				<div className="form-group">
					<label htmlFor= "folderName">Enter Folder Name: </label>
					<input type="text" name="folderName" id="folderName"/>
				</div>
				<div className="addfolder__button__group">
					<button type="submit" className="addfolder__button">Submit</button>
				</div>
			</form>
    );
  }
}

export default AddFolder;

