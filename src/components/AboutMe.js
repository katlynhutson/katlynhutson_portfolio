import React from 'react';

function AboutMe(props) {
	return (
		<div className='about-container'>
			<div className='skills-box'>
				<p className='skills-title'>skills</p>
				<ul className='skills-list'>
					<li className='skill'></li>
				</ul>
			</div>
			<div className='contact-box'>
				<p className='contacts-title'>contact information</p>
				<ul className='contact-list'>
					<li className='contact'></li>
				</ul>
			</div>
			<div className='resume-box'>
				<p className='resume-title'>resume</p>
				<div className='resume-card'>
					<a className='resume-link' href=''></a>
				</div>
			</div>
			<div className='image-box'>
				<img className='image-box' src='' alt='' />
			</div>
		</div>
	);
}

export default AboutMe;
