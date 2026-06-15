'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { projects } from '@/assets/projects.js';

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='relative bg-slate-950 text-slate-200 min-h-screen font-sans overflow-x-hidden'>
			{/* BACKGROUND EFFECT */}
			<div className='absolute inset-0 -z-10'>
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-600/20 blur-[120px] rounded-full' />
				<div className='absolute bottom-0 right-0 w-150 h-150 bg-cyan-500/10 blur-[120px] rounded-full' />
			</div>

			{/* GRID BACKGROUND */}
			<div className='absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]' />

			{/* NAVBAR */}
			<nav className='fixed top-0 w-full backdrop-blur border-b border-slate-800 bg-slate-950/70 z-50'>
				<div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
					<h1 className='font-semibold text-lg tracking-wide'>AlanAlbertMn</h1>

					<div className='hidden md:flex gap-8 text-sm'>
						<a href='public/fullStackEng_AlanAlbert.pdf' download>
							Download CV
						</a>
						<a href='#projects' className='hover:text-blue-400'>
							Projects
						</a>
						<a href='#contact' className='hover:text-blue-400'>
							Contact
						</a>
					</div>

					<button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
						☰
					</button>
				</div>

				{menuOpen && (
					<div className='md:hidden px-6 pb-4 flex flex-col gap-3 text-sm'>
						<a href='#projects'>Projects</a>
						<a href='#about'>About me</a>
						<a href='#contact'>Contact</a>
					</div>
				)}
			</nav>

			{/* HERO */}
			<section className='max-w-6xl mt-10 mx-auto py-48 text-center'>
				<motion.h1
					variants={fadeUp}
					initial='hidden'
					animate='show'
					className='text-5xl md:text-6xl font-bold mb-6'
				>
					Hello, I am <span className='text-blue-500'>Alan Albert</span>
				</motion.h1>

				<motion.p
					variants={fadeUp}
					initial='hidden'
					animate='show'
					transition={{ delay: 0.2 }}
					className='text-slate-400 max-w-2xl mx-auto text-lg mt-5 mb-10'
				>
					Full-Stack Software Engineer with almost 5 years of experience
					building scalable, high-performance web applications. Specialized in
					React.js, TypeScript, and modern UI development, with proven ability
					to optimize performance, improve user experience and deliver features
					at scale in agile teams.
				</motion.p>

				<motion.div
					variants={fadeUp}
					initial='hidden'
					animate='show'
					transition={{ delay: 0.3 }}
					className='flex justify-center gap-4'
				>
					<a
						href='#projects'
						className='bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-2xl font-medium transition shadow-lg shadow-blue-500/20'
					>
						Projects
					</a>

					<a
						href='#contact'
						className='border border-slate-700 hover:border-blue-500 px-7 py-3 rounded-2xl transition'
					>
						Contact
					</a>
				</motion.div>
			</section>

			{/* PROJECTS */}
			<section id='projects' className='max-w-6xl mx-auto px-6 py-12'>
				<motion.h2
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-3xl font-semibold text-center mb-14'
				>
					Projects
				</motion.h2>

				<div className='grid md:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeUp}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.02 }}
							className='bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition'
						>
							<h3 className='text-xl font-semibold mb-3'>{project.title}</h3>

							<p className='text-slate-400 text-sm mb-4'>
								{project.description}
							</p>

							<div className='flex flex-wrap gap-2 mb-4'>
								{project.tech.map((tech) => (
									<span
										key={tech}
										className='text-xs bg-slate-800 px-3 py-1 rounded-full'
									>
										{tech}
									</span>
								))}
							</div>

							<div className='flex gap-4 text-sm'>
								<a
									className='flex items-center gap-1 hover:text-blue-400'
									href={project.demoLink}
									target='_blank'
								>
									<ExternalLink size={16} /> Demo
								</a>

								<a
									className='flex items-center gap-1 hover:text-blue-400'
									href={project.repo}
									target='_blank'
								>
									<Github size={16} /> GitHub
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* TECH STACK */}
			<section className='max-w-6xl mx-auto px-6 py-24'>
				<motion.h2
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-3xl font-semibold text-center mb-14'
				>
					Technologies
				</motion.h2>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
					{[
						'HTML',
						'CSS',
						'JavaScript',
						'React',
						'Next.js',
						'Node.js',
						'MongoDB',
						'Tailwind',
					].map((tech) => (
						<motion.div
							key={tech}
							variants={fadeUp}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							whileHover={{ y: -6 }}
							className='bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center hover:border-blue-500 transition'
						>
							{tech}
						</motion.div>
					))}
				</div>
			</section>
			{/* ABOUT */}
			<section
				id='contact'
				className='max-w-3xl mx-auto px-6 py-24 pb-10 border-t border-slate-800 pt-10 text-center'
			>
				<motion.h2
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-3xl font-semibold mb-8'
				>
					CONTACT
				</motion.h2>

				<motion.p
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-center text-slate-400 leading-relaxed'
				>
					I&apos;m currently working on getting the most out of the AI, looking
					for a cross-functional team that prioritizes UX and overall
					performance of running apps.
				</motion.p>
				<motion.h2
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='text-2xl font-semibold mt-10 mb-15'
				>
					alanalbertmn@gmail.com
				</motion.h2>
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='flex justify-center gap-8'
				>
					<a
						className='hover:text-blue-400 transition'
						href='https://github.com/AlanAlbertMn'
						target='_blank'
					>
						<Github size={26} />
					</a>

					<a
						className='hover:text-blue-400 transition'
						href='https://www.linkedin.com/in/alan-albert-81764714a/'
						target='_blank'
					>
						<Linkedin size={26} />
					</a>

					<a
						className='hover:text-blue-400 transition'
						href='mailto:alanalbertmn@gmail.com'
					>
						<Mail size={26} />
					</a>
				</motion.div>
			</section>

			{/* FOOTER */}
			<footer className='text-center text-slate-500 pb-10 border-t border-slate-800 pt-10'>
				© {new Date().getFullYear()} Alan Albert. All rights reserved.
			</footer>
		</div>
	);
}
