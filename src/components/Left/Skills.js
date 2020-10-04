import React from 'react';
import ContentEditable from 'react-contenteditable';
import { MdAddCircle } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Skills = () => {
	const addskiilSection = (section, thecontainer) => {
		const singleContact = document.querySelector(section);
		const container = document.querySelector(thecontainer);
		const newContact = singleContact.cloneNode(true);
		container.appendChild(newContact);
	};

	const delskiilSection = (section, thecontainer) => {
		const allskills = document.querySelectorAll(section);
		if (allskills.length > 1) {
			const container = document.querySelector(thecontainer);
			container.removeChild(container.lastChild);
		} else {
			alert('Delete mat kar saale!');
		}
	};

	return (
		<>
			<div className='skill-details'>
				<button
					className='add-btn left-icon'
					onClick={() =>
						addskiilSection('.single-skill-div', '.skill-details')
					}>
					<MdAddCircle />
				</button>
				<button
					className='del-btn left-icon'
					onClick={() =>
						delskiilSection('.single-skill-div', '.skill-details')
					}>
					<RiDeleteBin6Line />
				</button>
				<ContentEditable className='con-title apply-font' html='Skills' />
				<div className='single-skill-div'>
					<ContentEditable
						className='single-skill-text apply-font'
						html='Skill Name'
					/>
				</div>
				<div className='single-skill-div'>
					<ContentEditable
						className='single-skill-text apply-font'
						html='Skill Name'
					/>
				</div>
				<div className='single-skill-div'>
					<ContentEditable
						className='single-skill-text apply-font'
						html='Skill Name'
					/>
				</div>
			</div>

			<div className='language-details'>
				<button
					className='add-btn left-icon'
					onClick={() =>
						addskiilSection('.single-language-div', '.language-details')
					}>
					<MdAddCircle />
				</button>
				<button
					className='del-btn left-icon'
					onClick={() =>
						delskiilSection('.single-language-div', '.language-details')
					}>
					<RiDeleteBin6Line />
				</button>
				<ContentEditable className='con-title apply-font' html='Languages' />
				<div className='single-language-div'>
					<ContentEditable
						className='single-language-text apply-font'
						html='English'
					/>
				</div>
				<div className='single-language-div'>
					<ContentEditable
						className='single-language-text apply-font'
						html='German'
					/>
				</div>
				<div className='single-language-div'>
					<ContentEditable
						className='single-language-text apply-font'
						html='Spanish'
					/>
				</div>
			</div>
		</>
	);
};

export default Skills;
