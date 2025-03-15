import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Rule from './components/HorizontalRule/Rule';
import NavBar from './components/NavBar';
import Story from './components/Story';
const App = () => {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
			<NavBar />
			<Hero />
			<About />
			<Rule />
			<Feature />
			<Story />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
