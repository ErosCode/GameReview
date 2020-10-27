import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

import './styles.scss';

const AdminGames = ({games, userRole, getUserRole}) => {
	useEffect(() => {
		getUserRole(userRole)
	}, [userRole])

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
	);
} else {
	return <Redirect to="/"/>
}
};

AdminGames.propTypes = {
	userRole: PropTypes.string.isRequired,
	getUserRole: PropTypes.func.isRequired,
}
export default AdminGames;
