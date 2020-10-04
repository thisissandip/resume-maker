import React, { useState } from 'react';
import FontPicker from 'font-picker-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Controller() {
	const key = 'AIzaSyBARIMRC_z2jYUHyPmqJ66MnA4ID731pNg';

	const [activeFont, setFont] = useState('Poppins');

	const generatePDF = () => {
		html2canvas(document.querySelector('.resume-canvas'), {
			useCORS: true,
		}).then((canvas) => {
			/* 			document.body.appendChild(canvas); // if you want see your screenshot in body.
			 */ const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			pdf.addImage(imgData, 'PNG', -3, 0, pdfWidth, pdfHeight);
			pdf.save('download.pdf');
		});
	};

	const changeColor = () => {
		const root = document.documentElement;

		const allcolors = [
			'black',
			' rgb(141, 76, 3)',
			'rgb(31, 95, 76)',
			'rgb(129, 25, 25)',
			'rgb(60, 12, 92)',
			'rgb(110, 16, 55)',
			'rgb(7, 80, 58)',
			'rgb(43, 39, 65)',
		];
		const thiscolor = Math.floor(Math.random() * allcolors.length);
		root.style.setProperty('--hexcolor', allcolors[thiscolor]);
	};

	return (
		<>
			<div className='controller-container'>
				<FontPicker
					apiKey={key}
					activeFontFamily={activeFont}
					onChange={(nextFont) => setFont(nextFont.family)}
				/>
				<button className='co-btn' onClick={generatePDF}>
					Download as PDF
				</button>
				<button className='co-btn' onClick={changeColor}>
					Change Color
				</button>
			</div>
		</>
	);
}

export default Controller;
