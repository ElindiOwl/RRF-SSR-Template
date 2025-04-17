export const MainPage = () => {
	return (
		<div style={{
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
			justifyContent: 'center'
		}}>
			<h2>This is the main page</h2>
			<h3>Go to /test to see a client fetched example</h3>
			<h3>Go to /test1 to see a server fetched example</h3>
		</div>
	)
}