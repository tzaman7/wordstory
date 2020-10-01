import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import Word3D from '../Word3D';

const styles = {
	default: {
		fontFamily: 'Courier, monospace',
		fontSize: 35,
		fontStyle: 'oblique',
		padding: 4,
	},
	large: {
		fontSize: 55,
		fontWeight: 'bold',
	},
	small: {
		fontSize: 25,
	},
};

const words = {
	large: [
		'react-native',
		'JavaScript',
		'react-native-shared-element',
		'Vicky Parking',
		'Arion Run',
		'Firestorter',
	],
	normal: [
		
		'react-native',
		'React.js',
        'TypeScript',
        'Vicky Parking',
		'Arion Run',
		'Firestorter',
	],
	small: ['Cordova', 'MFC', '.NET', 'VBA', 'Win-CE', 'Nijmegen',
    'TypeScript',
    'Vicky Parking'],
};

export default class MyCloud extends Component {
	componentDidMount() {
		setInterval(() => {
			this.forceUpdate();
		}, 20000);
	}

	renderWords() {
		const result = [];
		for (const key in words) {
			const style = styles[key];
			words[key].forEach(word => {
				result.push(
					<Word3D
						key={word}
						style={style}
						showDelay={1000 + result.length * 100}
					>
						{word}
					</Word3D>
				);
			});
		}
		return result;
	}

	render() {
		return (
			<TagCloud className="cloud" style={styles.default}>
				{this.renderWords()}
			</TagCloud>
		);
	}
}

