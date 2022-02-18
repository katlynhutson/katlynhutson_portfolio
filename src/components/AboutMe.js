import React from 'react';

function AboutMe(props) {
	return (
		<div className='about-container'>
			<div className='about-box'>
				<div className='me-box'>
					<p className='me-title'>A little bit about me:</p>
					<p className='me-content'>
						Hi! I'm Katy! I'm a Software Engineer with a diverse background in
						psychology and project management. I utilize communication and
						management skills to produce accessible, intuitive, and clean
						solutions. I thrive in environments that are supportive,
						challenging, and centered around growth and learning. I value
						integrity and am driven by a desire to leave a lasting positive
						impact.
					</p>
				</div>
				<div className='skills-box'>
					<p className='skills-title'>skills: </p>
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
					</ul>
				</div>
				<div className='contact-box'>
					<p className='contact-title'>contact information:</p>
					<ul className='contact-list'>
						<li className='contact'>
							<a href='https://www.linkedin.com/in/katlyn-hutson/'>linked in</a>
						</li>
						<li className='contact'>
							<a href='https://github.com/katlynhutson'>git hub</a>
						</li>
						<li className='contact'>
							<a href='kmhutson5@gmail.com'>email</a>
						</li>
						<li className='contact'>location: DFW</li>
					</ul>
				</div>
				<div className='resume-box'>
					<a
						className='resume-title'
						href='https://docs.google.com/document/d/e/2PACX-1vTyKlJsEH1WrkG4cPSEeL-drMWsC_az3xcPe9Kikj_mzowgX6mPL1VgJJgrBymWuk7x0qtJfzdy1xy9/pub'>
						resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
