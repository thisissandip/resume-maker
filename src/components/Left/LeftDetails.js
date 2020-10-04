import React from 'react';
import Contact from './Contact';
import Skills from './Skills';

function LeftDetails() {
	return (
		<>
			<div className='left-details'>
				<Contact />
				<Skills />
			</div>
		</>
	);
}

export default LeftDetails;
