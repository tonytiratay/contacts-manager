const style = {
	header: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#222',
		height: '100px',
		padding: '20px',
		color: 'white',
	},
	cursor: {
		cursor: 'pointer',
	},
	container: {
		display: 'flex',
		flex: 1,
		flexWrap: 'wrap',
	},
	leftColumn: {
		display: 'flex',
		flex: 1,
		minWidth: 250,
		background: '#333',
		overflowY: 'scroll',
	},
	rightColumn: {
		display: 'flex',
		flex: 1,
		overflowY: 'scroll',
		minWidth: 300,

	}
};

export default style