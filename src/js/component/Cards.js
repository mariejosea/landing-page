import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="card">
			<img src={props.srcImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardContent}</p>
				<a href={props.url} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	srcImage: PropTypes.string,
	cardTitle: PropTypes.string,
	cardContent: PropTypes.string,
	url: PropTypes.string,
	label: PropTypes.string
};
