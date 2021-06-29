import React from 'react'
import './FAQ.css'

function FAQ({ faq, index, toggleFAQ, color }) {
	const colori = color;

	
	if (colori === "rot") {
		return (
			<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question-rot">
				{faq.question}

			</div>
			<hr />

			<div className="faq-answer">
				{faq.answer}
			</div>

		</div>
		);
	}
	else if(colori === "orange"){
		return (
			<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question-orange">
				{faq.question}

			</div>
			<hr />

			<div className="faq-answer">
				{faq.answer}
			</div>

		</div>
		);
	}
	else if (colori=== "lila"){
		return(
			<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question-lila">
				{faq.question}

			</div>
			<hr />

			<div className="faq-answer">
				{faq.answer}
			</div>

		</div>
		);
	}

	
}



export default FAQ