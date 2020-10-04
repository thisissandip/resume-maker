import React from 'react';
import ContentEditable from 'react-contenteditable';
import { MdAddCircle } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Contact = () => {
	const addSection = () => {
		const singleContact = document.querySelector('.single-contact-div');
		const container = document.querySelector('.contact-details');
		const newContact = singleContact.cloneNode(true);
		container.appendChild(newContact);
	};

	const delskiilSection = () => {
		const AllsingleContact = document.querySelectorAll('.single-contact-div');
		if (AllsingleContact.length > 1) {
			const container = document.querySelector('.contact-details');
			container.removeChild(container.lastChild);
		} else {
			alert('Delete mat kar bey');
		}
	};

	return (
		<div className='contact-details'>
			<button className='add-btn left-icon' onClick={addSection}>
				<MdAddCircle />
			</button>
			<button className='del-btn left-icon' onClick={delskiilSection}>
				<RiDeleteBin6Line />
			</button>
			<ContentEditable className='con-title apply-font' html='CONTACT' />
			<div className='single-contact-div'>
				<ContentEditable
					className='single-contact-text-title apply-font'
					html='Phone'
				/>
				<ContentEditable
					className='single-contact-text apply-font'
					html='XXXXXXXXXX'
				/>
			</div>
			<div className='single-contact-div'>
				<ContentEditable
					className='single-contact-text-title apply-font'
					html='Email'
				/>
				<ContentEditable
					className='single-contact-text apply-font'
					html='dummyemail@dummy.com'
				/>
			</div>
			<div className='single-contact-div'>
				<ContentEditable
					className='single-contact-text-title apply-font'
					html='Address'
				/>
				<ContentEditable
					className='single-contact-text apply-font'
					html='Colaba, Mumbai'
				/>
			</div>
		</div>
	);
};

export default Contact;
