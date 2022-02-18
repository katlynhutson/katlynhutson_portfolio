import { Spiral as Hamburger } from 'hamburger-react';
// https://hamburger-react.netlify.app/
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
			<nav>
				<div className='hamburger'>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
				<ul style={{ display: isOpen ? 'flex' : 'none' }} className='nav-menu'>
					<li>
						<Link to='/' className='nav-link'>
							home
						</Link>
					</li>
					<li>
						<Link to='/about' className='nav-link'>
							about me
						</Link>
					</li>
					<li>
						<Link to='/projects' className='nav-link'>
							projects
						</Link>
					</li>
					{/* <li>
						<Link to='/life-update' className='nav-link'>
							life update
						</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;

// references for hamburger menu -->https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
