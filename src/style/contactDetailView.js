const style = {
	container: {
		display: 'flex',
		flex: 1,
		padding: 20,
		flexDirection: 'column',
	},
	userContainer: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyItems: 'flex-start',
	},
	button: {
		flex: 1,
		padding: 10,
		margin: '10px',
		background: '#ff0000',
		color: '#fff',
		height: '17px',
		borderRadius: 10,
		textAlign: 'center',
		cursor: 'pointer',
	},
	infos: {
		flex: 1, display: 'flex',
		marginTop: 20,

	},
	imageContainer: {
		display: 'flex',
		marginLeft: '10px',
		marginRight: '10px',
	},
	image: {
		width: '100px',
		height: '100px',
		alignSelf: 'center',
		backgroundSize: 'cover',
		borderRadius: '50%',
	},
	userInfo: {
		marginLeft: '10px',
		alignSelf: 'center',
	},
	delete: {
		display: 'flex',
		justifyItems: 'flex-end',
	},
	name: {
		fontSize: '30px',
		color: "#333",
		fontWeight: '300',
		marginRight: 10,
	},
	inputName: {
		fontSize: '30px',
		color: "#333",
		fontWeight: '300',
		border: 'none',
	},
	inputCompany: {
		border: 'none',
		fontSize: 14,
		marginLeft: 10,
	},
	company: {
		lineHeight: 2,
	},
	formInputs: {
		display: 'flex',
		border: '1px solid #efefef',
		marginBottom: 15,
		padding: 15,
		flexWrap: 'wrap',
	},
	formInputContainer: {
		display: 'flex',
		alignItems: 'center',
		flex: 1,
		margin: '10px',
		flexWrap: 'wrap',
		flexDirection: 'column',
	},
	forminput: {
		padding: 10,
		flex: 1,
		border: '1px solid #eee',
		flexWrap: 'wrap',
	},
	label: {
		marginRight: 5,
		color: '#666',
		fontSize: 13,
	}
};

export default style