import type {FC} from 'react';

type FetchType = 'client' | 'server';

interface TestPageProps {
    title: string,
    body: string,
    fetchType: FetchType
}

export const TestPage: FC<TestPageProps> = ({body = 'empty', title = 'empty', fetchType = 'server'}) => {
	return (
		<div style={{
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
			justifyContent: 'center'
		}}>
			<h2>This is a test route</h2>
			<h2>Here you see a {fetchType}-side fetched object</h2>
			<h4>{title}</h4>
			<h5>{body}</h5>
		</div>
	)
}