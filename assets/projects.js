export const projects = [
	{
		title: 'E-commerce TechPulse',
		description:
			'Full e-commerce interface with user creation, login, persistent cart, product details, Stripe implementation and webhooks to create user orders.',
		tech: [
			'React.js',
			'TypeScript',
			'Tailwind',
			'React Router',
			'Next.js',
			'Prisma',
		],
		repo: 'https://github.com/AlanAlbertMn/TechPulse',
		demoLink: 'https://tech-pulse-navy.vercel.app/',
	},
	{
		title: 'RAWG Games App',
		description: `Videogame app that includes user creation and login via Authenticator library. 
              Consumes RAWG third party API for the videogames data and stores it locally for reducing extra calls on refresh, helping UI/UX.`,
		tech: ['React', 'Express', 'MongoDB'],
		repo: 'https://github.com/AlanAlbertMn/personal-rawg',
		demoLink: 'https://github.com/AlanAlbertMn/personal-rawg',
	},
	{
		title: 'Spotify App',
		description: `Spotify app was developed consuming a third party API that provides real Spotify data.
              A personal token was added into the environment variables to consume the API.`,
		tech: ['React', 'Tailwind'],
		repo: 'https://github.com/AlanAlbertMn/spotify-app',
		demoLink: 'https://github.com/AlanAlbertMn/spotify-app',
	},
];
