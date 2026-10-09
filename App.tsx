import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import Expertise from './Screens/Expertise';
import Project from './Screens/Project';
import ServiceGallery from './Screens/ServiceGallery';
import { Exterior, resized } from './data/Image';
import Studio from './Screens/Studio';

const serviceGalleries = {
	interior: { title: 'Interior Design', images: resized },
	exterior: { title: 'Exterior Design', images: Exterior },
	animated: { title: 'Animated Design', images: Exterior },
};

type ServiceId = keyof typeof serviceGalleries;

export default function App() {
	const [activeService, setActiveService] = useState<ServiceId | null>(null);

	if (activeService) {
		const gallery = serviceGalleries[activeService];

		return (
			<ServiceGallery
				title={gallery.title}
				images={gallery.images}
				onBack={() => {
					setActiveService(null);
					requestAnimationFrame(() => {
						document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
					});
				}}
			/>
		);
	}

	return (
		<>
		<Home />
      	<Navbar />
      	<Project />
      	<Expertise onSelectService={setActiveService} />
	  	<Studio /> 
		{/* <Contact />  */}
		</>
			
	);
}