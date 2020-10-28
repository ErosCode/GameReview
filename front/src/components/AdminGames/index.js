import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Accordion, Card, Button} from 'react-bootstrap';
import './styles.scss';

const AdminGames = ({ games, userRole }) => {

    const propstags = ['Nodejs', 'MongoDB'];
    const selectedTags = tags => {
		console.log(tags);
	};
    const [tags, setTags] = useState(propstags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	if (userRole === 'admin') {
    return (
		<div className="adminGames">
			
			{games.map(({ name, _id, description, imgURL  }) =>(
			<Accordion defaultActiveKey="1">
				<Card>
				  <Card.Header className="accordion__header">
					<Accordion.Toggle as={Button} eventKey="0">
							{name}
					</Accordion.Toggle>
						<button className="accordion__button--delete"> 
							x
						</button>
					
				  </Card.Header>
				  <Accordion.Collapse eventKey="0">
					<Card.Body>Hello! I'm the body</Card.Body>
				  </Accordion.Collapse>
				</Card>
				</Accordion>
			))}
			
			<div className="tags-input">
				<ul id="tags">
					{tags.map((tag, index) => (
						<li key={index} className="tag">
							<span className='tag-title'>{tag}</span>
							<span className='tag-close-icon'
								onClick={() => removeTags(index)}
							>
								x
							</span>
						</li>
					))}
				</ul>
				<input
					type="text"
					onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
					placeholder="Press enter to add tags"
				/>
			</div>
			
		</div>
	);
} else {
	return <Redirect to="/"/>
}
};

AdminGames.propTypes = {
	userRole: PropTypes.string.isRequired,
	games: PropTypes.arrayOf(
		PropTypes.shape({
		  name: PropTypes.string,
		  description: PropTypes.string,
		  _id: PropTypes.string,
		  imgURL : PropTypes.string,
		}),
	  ).isRequired,
}
export default AdminGames;
