import React, { useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import WorkExp from './WorkExp';
import Education from './Education';

function RightCanvas() {
	const Name = useRef('Your Name');
	const pos = useRef('Web Developer');
	const AboutMe = useRef(
		"Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. Dummy texts have been in use by typesetters since the 16th century."
	);
	const AboutMeTiltle = useRef('About Me');

	const handleChange = (e) => {
		e.current = e.target.value;
	};

	return (
		<>
			<div className='name-pos'>
				<ContentEditable
					className='name apply-font apply-color'
					html={Name.current}
					onChange={handleChange}
				/>
				<ContentEditable
					className='pos apply-font'
					html={pos.current}
					onChange={handleChange}
				/>
			</div>

			<div className='about-me-container'>
				<ContentEditable
					className='about-me-title apply-font apply-color'
					html={AboutMeTiltle.current}
					onChange={handleChange}
				/>
				<ContentEditable
					className='about-me-des apply-font'
					html={AboutMe.current}
					onChange={handleChange}
				/>
			</div>
			<WorkExp />
			<Education />
		</>
	);
}

export default RightCanvas;
