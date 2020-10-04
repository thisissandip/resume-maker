import React, { useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { MdAddCircle } from 'react-icons/md';
import { BsFillCircleFill } from 'react-icons/bs';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Education = () => {
	const EduTitle = useRef('Education');
	const YEAR = useRef('YEAR ');
	const EduDegree = useRef('Degree');
	const EduSchool = useRef('School');

	const handleChange = (e) => {
		e.current = e.target.value;
	};
	const addEducation = () => {
		const EduDetailsContainer = document.querySelector('.edu-e-details');
		const Edudetails = document.querySelector('.edu-e-details-box');
		const NewEdudetails = Edudetails.cloneNode(true);
		EduDetailsContainer.appendChild(NewEdudetails);
	};

	const delEducation = () => {
		const AllEdudetails = document.querySelectorAll('.edu-e-details-box');
		if (AllEdudetails.length > 1) {
			const EduDetailsContainer = document.querySelector('.edu-e-details');
			EduDetailsContainer.removeChild(EduDetailsContainer.lastChild);
		} else {
			alert('Delete mat kar bey');
		}
	};

	return (
		<div className='edu-e-container'>
			<ContentEditable
				className='edu-e-title apply-font apply-color'
				html={EduTitle.current}
				onChange={handleChange}
			/>
			<button className='add-edu-details-btn icons' onClick={addEducation}>
				<MdAddCircle />
			</button>
			<button className='del-edu-btn icons' onClick={delEducation}>
				<RiDeleteBin6Fill />
			</button>
			<div className='edu-e-details'>
				<div className='edu-e-details-box'>
					<div className='edu-dot apply-color'>
						<BsFillCircleFill />
					</div>
					<div classname='edu-text-details'>
						<div className='pos-year'>
							<ContentEditable
								className='edu-pos apply-font apply-color'
								html={EduDegree.current}
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
							className='edu-company apply-font'
							html={EduSchool.current}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
