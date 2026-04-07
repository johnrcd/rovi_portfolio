document.addEventListener("DOMContentLoaded", (event) => {
	Particles.init({
		selector: '.particles',
		color: "#1d3243",
		connectParticles: true,
		speed: 0.1,
		maxParticles: 100,
		minDistance: 120,
		responsive: [
			{ breakpoint: 1440, options: { maxParticles: 100, }, },
			{ breakpoint: 1200, options: { maxParticles: 75, }, },
			{ breakpoint: 768, options: { maxParticles: 50, }, },
			{ breakpoint: 576, options: { maxParticles: 0, }, },
		],
	});
});

console.log("owo");
