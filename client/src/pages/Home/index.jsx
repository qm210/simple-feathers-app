import { feathers } from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import preactLogo from '../../assets/preact.svg';
import './style.css';

export function Home() {

	console.log("I'm loaded!");



	const socket = io('http://localhost:3030');
	const app = feathers();
	app.configure(socketio(socket))
	app.service('messages').on('created', (message) =>
		console.log('New message created', message)
	)

// Call the `messages` service
	app.service('messages').create({
		text: 'A message from a REST client'
	});

	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>

			<h1>
				hellö.
			</h1>

			<marquee>
				I am a derbe awesome hacker boy!
			</marquee>

			<section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
