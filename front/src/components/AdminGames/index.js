import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const AdminGames = () => {
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
}
export default AdminGames;
