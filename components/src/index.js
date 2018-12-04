import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
//faker.js npm install --save faker (Local Project only)

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:00PM" 
					comment="Hello World" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail 
				author="Jane" 
				timeAgo = "Friday at 3:00PM" 
				comment="Go Away" 
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail 
				author="Jacob" 
				timeAgo="Yesterday at 5:00PM" 
				comment="I'm alive" 
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector("#root"))