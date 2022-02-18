function Projects(props) {
	return (
		<div className='projects'>
			<div className='projects-box'>
				<div className='one'>
					<img
						src={require('../images/stroke-response.png')}
						alt='Stroke Response'
						className='oneimg'
					/>

					<div className='one-blurb'>
						<p className='one-title'>
							<a href='https://github.com/katlynhutson/stroke_react'>
								stroke response
							</a>
						</p>
						<p className='one-content'>
							Capstone full-stack application designed to be used as a tool for
							responders to a possible stroke. Employed React, Django and
							PostgreSQL to create an application with token authentication and
							data storing.
						</p>
					</div>
				</div>
				<div className='two'>
					<img
						src={require('../images/plant-haven.png')}
						alt='Plant Haven'
						className='twoimg'
					/>

					<div className='two-blurb'>
						<p className='two-title'>
							<a href='https://github.com/katlynhutson/project3'>plant haven</a>
						</p>
						<p className='two-content'>
							Full-stack collaborative application with CRUD functionality,
							built utilizing React, MongoDb, and Express. Designed to help
							users choose a houseplant that meets their desires, and educate
							the user on plant care.
						</p>
					</div>
				</div>
				<div className='three'>
					<img
						src={require('../images/morning-ritual.png')}
						alt='Morning Ritual'
						className='threeimg'
					/>

					<div className='three-blurb'>
						<p className='three-title'>
							<a href='https://github.com/katlynhutson/morning-ritual'>
								morning ritual
							</a>
						</p>
						<p className='three-content'>
							Browser-based morning-routine React app utilizing HTML, CSS,
							JavaScript, and React Router. Designed to improve user happiness
							using techniques backed by science.
						</p>
					</div>
				</div>
				<div className='four'>
					<img
						src={require('../images/simon.png')}
						alt='Simon'
						className='fourimg'
					/>

					<div className='four-blurb'>
						<p className='four-title'>
							<a href='https://github.com/katlynhutson/Simon-Game'>simon</a>
						</p>
						<p className='four-content'>
							Web-browser game using JavaScript, HTML, CSS, DOM Manipulation,
							and Flexbox to create the retro 80s Hasbro hand-held game with a
							modern twist:
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;

//this source helped me get the images to load --> https://stackoverflow.com/questions/34582405/react-wont-load-local-images
