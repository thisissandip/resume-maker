import React, { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { MdAddCircle } from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';
import { RiAddLine, RiDeleteBin6Fill } from 'react-icons/ri';

const WorkExp = () => {
	const WorkTitle = useRef('Work Experience');
	const WorkPosition = useRef('Position');
	const WorkCompany = useRef('Company');
	const Workdes = useRef(
		'Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with content.'
	);
	const YEAR = useRef('YEAR ');

	const handleChange = (e) => {
		e.current = e.target.value;
	};

	const addDetails = () => {
		const workDetailsContainer = document.querySelector('.work-e-details');
		const workdetails = document.querySelector('.work-e-details-box');
		const newWorkDetails = workdetails.cloneNode(true);
		workDetailsContainer.appendChild(newWorkDetails);
	};

	const delWork = () => {
		const workDetailsBox = document.querySelectorAll('.work-e-details-box');
		if (workDetailsBox.length > 1) {
			const workDetailsContainer = document.querySelector('.work-e-details');
			workDetailsContainer.removeChild(workDetailsContainer.lastChild);
		} else {
			alert('Delete mat kar bey');
		}
	};

	return (
		<>
			<div className='work-e-container'>
				<ContentEditable
					className='work-e-title apply-font apply-color'
					html={WorkTitle.current}
					onChange={handleChange}
				/>
				<button
					className='add-work-details-btn icons'
					onClick={() => {
						addDetails();
					}}>
					<MdAddCircle />
				</button>
				<button className='del-work-btn icons' onClick={delWork}>
					<RiDeleteBin6Fill />
				</button>
				<div className='work-e-details'>
					<div id='1' className='work-e-details-box'>
						<div className='work-dot apply-color'>
							<BsFillCircleFill />
						</div>
						{/* 	<div className='line'></div> */}
						<div classname='work-text-details'>
							<div className='pos-year'>
								<ContentEditable
									className='work-pos apply-font apply-color'
									html={WorkPosition.current}
									onChange={handleChange}
								/>
								<div className='year-container'>
									<ContentEditable
										className='work-year apply-font apply-color'
										html={YEAR.current}
										onChange={handleChange}
									/>
									<span className='dash'> - </span>
									<ContentEditable
										className='work-year apply-font apply-color'
										html={YEAR.current}
										onChange={handleChange}
									/>
								</div>
							</div>
							<ContentEditable
								className='work-company apply-font'
								html={WorkCompany.current}
								onChange={handleChange}
							/>
							<ContentEditable
								className='work-des apply-font'
								html={Workdes.current}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkExp;
