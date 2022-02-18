import React from 'react';

function AboutMe(props) {
	return (
		<div className='about-container'>
			<div className='about-box'>
				<div className='skills-box'>
					<p className='skills-title'>skills</p>
					<ul className='skills-list'>
						<li className='skill'>Python</li>
						<li className='skill'>JavaScript</li>
						<li className='skill'>Django</li>
						<li className='skill'>React</li>
						<li className='skill'>Express</li>
						<li className='skill'>NodeJS</li>
						<li className='skill'>Git</li>
						<li className='skill'>PostgreSQL</li>
						<li className='skill'>MongoDB </li>
						<li className='skill'>Object Oriented Programming</li>
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
						<a
							className='resume-link'
							href='https://docs.google.com/document/d/e/2PACX-1vTyKlJsEH1WrkG4cPSEeL-drMWsC_az3xcPe9Kikj_mzowgX6mPL1VgJJgrBymWuk7x0qtJfzdy1xy9/pub'>
							Resume
						</a>
					</div>
				</div>
				<div className='image-box'>
					<img className='image-box' src='' alt='' />
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
