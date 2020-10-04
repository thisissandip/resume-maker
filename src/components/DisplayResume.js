import React from 'react';
import LeftCanvas from './Left/LeftCanvas';
import RightCanvas from './Right/RightCanvas';

function DisplayResume() {
	return (
		<>
			<div className='display-resume-container'>
				<div className='resume-canvas'>
					<div className='left-canvas'>
						<LeftCanvas />
					</div>
					<div className='right-canvas'>
						<RightCanvas />
					</div>
				</div>
			</div>
		</>
	);
}

export default DisplayResume;
