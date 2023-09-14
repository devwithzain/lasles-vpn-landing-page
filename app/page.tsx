import {
	Features,
	Footer,
	Global,
	Home,
	Pricing,
	Testimonials,
} from "@components";

const App = () => {
	return (
		<main className="w-[90%] mx-auto bg-white overflow-hidden">
			<Home />
			<Features />
			<Pricing />
			<Global />
			<Testimonials />
			<Footer />
		</main>
	);
};

export default App;
