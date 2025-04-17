import {TestPage} from 'pages/Test-Page';

import type {Route} from '+types/test';

/* global fetch */
export const clientLoader = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	return await res.json()
}

const Test = ({loaderData}: Route.ComponentProps) => {
	return (
		<>
			<TestPage body={loaderData[0].body} fetchType={'client'} title={loaderData[0].title}/>
		</>
	)
}

export default Test