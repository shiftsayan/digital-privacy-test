// Sourced from https://github.com/Craig-Creeger/react-likert-scale/blob/master/src/likert.js

import React from 'react';
import SHA1 from 'crypto-js/sha1';

import styles from './LikertScale.module.scss';

class LikertScale extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { question, responses } = this.props;
		const sha = String(SHA1(question)).substring(0, 7);
		const radios = responses.map((response, idx) => {
			const uniqueKey = `${sha}${idx}`;
			return (
				<label key={uniqueKey} htmlFor={uniqueKey} className={styles.likertResponse}>
					<span className={styles.likertLine} />
					<span className={styles.likertLine} />
					<input
						type='radio'
						value={response.value}
						name={sha}
						id={uniqueKey}
						className={styles.visuallyHidden}
						onClick={() => {
							this.props.onClick(idx);
						}}
					/>
					<span className={styles.likertIndicator} />
					<span className={styles.likertText}>{response.text}</span>
				</label>
			);
		});

		return (
			<>
				<h2 className={styles.title}>{question}</h2>
				<fieldset className={styles.likertScale}>
					<div className={styles.likertBand}>{radios}</div>
				</fieldset>
			</>
		);
	}
}

export default LikertScale;