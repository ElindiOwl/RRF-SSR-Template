import {TestPage} from 'pages/Test-Page';

import type {Route} from '+types/test';

/* global fetch */
export const serverLoader = async () => {
	const res = await fetch('http://localhost:3001/posts');
	return await res.json();
};

const Test = ({loaderData}: Route.ComponentProps) => {
	return (
		<div>
			<TestPage body={loaderData[0].body} fetchType={'server'} title={loaderData[0].title}/>
		</div>
	);
};

export default Test;