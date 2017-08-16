export const cellStyles = {
	// For Navigate Cell only
	navigateCell: {
	},

	// For Switch Cell only
	switchCell: {
		mainText: {
			fontSize: 14,
			fontWeight: '600',
			color: '#333333'
		}
	},

	// For Amount Input Cell only
	amountInputCell: {
		mainText: {
			fontSize: 12,
			color: '#a2a2a2',
		},
		inputText: {
			fontSize: 16,
			color: '#333333',
			height: 20,
			marginTop: 5
		},
		cellContent: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			marginLeft: 16,
			marginRight: 16
		}
	},

	androidAmountInputcell: {
		mainText: {
			flex: 1,
			fontSize: 16,
			color: '#333333',
		},
		inputText: {
			flex: 1,
			fontSize: 16,
			color: '#333333',
			height: 20,
			marginTop: 5,
			width: 100,
			borderWidth: 1,
			borderColor: '#bcbcbc',
			marginVertical: 24,
			textAlign: 'right',
			paddingHorizontal: 10,
			borderRadius: 5
		},
		cellContent: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			alignContent: 'center',
			justifyContent: 'center',
			marginLeft: 16,
			marginRight: 16
		}
	},

	expandableCell: {
		mainText: {
			fontSize: 12,
			color: '#a2a2a2'
		},
		detailText: {
			fontSize: 16,
			color: '#333333',
			height: 20,
			marginTop: 5
		},
		cellContent: {
			flex: 1,
			backgroundColor: 'red',
			flexDirection: 'column',
			justifyContent: 'center',
			marginLeft: 16,
			marginRight: 16
		},
		subcell: {
			backgroundColor: 'white',
			marginLeft: 32
		}
	},

	// For TextCell only
	textCellContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 8,
		margin: 16,
	},

	// Common to all cells
	boldText: {
		fontWeight: 'bold',
	},
	cellContainer: {
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	cellContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 16,
		marginRight: 16
	},
	cellBottomShadow: {
		height: 1,
		backgroundColor: '#e9e9e9'
	},
	mainText: {
		fontSize: 16,
		color: '#333333',
		textAlign: 'left'
	},
	standaloneMainText: {
		fontSize: 16,
		color: '#333333',
		marginRight: 'auto'
	},
	detailText: {
		marginVertical: 5,
		fontSize: 16,
		color: '#333333',
		backgroundColor: 'transparent'
	},
	chevronImage: {
		width: 16,
		height: 16,
		fontSize: 16,
		textAlignVertical: 'center',
		textAlign: 'center',
		color: '#c7c7cc'
	},
	checkbox: {
		backgroundColor: 'transparent',
		height: 25,
		width: 25
	},
	leftIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
		marginRight: 16
	},
	textWithIconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	amountText: {
		fontSize: 16,
		textAlign: 'right',
		textAlignVertical: 'center',
		color: '#333333',
		marginRight: 8
	},
	lefTextWithIconContainer: {
		flex: 1,
		paddingRight: 8
	},
	rightTextWithIconContainer: {
		justifyContent: 'flex-end',
	},
	swipeButtons: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
    paddingLeft: 13 
	},
	swipeButtonText: {
		color: '#ffffff',
		textAlign: 'center',
		width: 50,
		fontSize: 10
	}
};
