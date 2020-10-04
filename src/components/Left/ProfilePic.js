import React, { useRef } from 'react';
import { GrAddCircle } from 'react-icons/gr';

export default function ProfilePic() {
	const profilepicInput = useRef();

	const previewImg = (e) => {
		const preview_Img = document.querySelector('.Preview-Img');

		if (e.target.files.length > 0) {
			const fr = new FileReader();
			fr.readAsDataURL(profilepicInput.current.files[0]);
			fr.onload = (e) => {
				preview_Img.src = e.target.result;
			};
		}
	};

	const displayaddbtn = () => {
		const pic_Add_btn = document.querySelector('.pic-add-btn-container');
		pic_Add_btn.style.opacity = '1';
	};
	const removeaddbtn = () => {
		const pic_Add_btn = document.querySelector('.pic-add-btn-container');
		pic_Add_btn.style.opacity = '0';
	};

	return (
		<>
			<div
				className='profile-pic-container'
				onMouseEnter={displayaddbtn}
				onMouseLeave={removeaddbtn}>
				<label htmlFor='profile-inp' className='pic-add-btn-container icons'>
					<GrAddCircle />{' '}
					<label className='image-info apply-font'>Select Your Picture</label>
					<label className='square-img apply-font'>(use a square image)</label>
				</label>

				<input
					id='profile-inp'
					type='file'
					accept='image/'
					ref={profilepicInput}
					onChange={previewImg}
				/>
				<img
					className='Preview-Img'
					alt=''
					src={require('../../imgs/profile.jpg')}
				/>
			</div>
		</>
	);
}
