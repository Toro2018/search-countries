import React from 'react';

const Card=({name, nativeName, capitalCity, flag, code})=>{
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-20-ns' style={{verticalAlign: "middle"}}>
			<img alt='no flag available' src={flag}/>
			<div>
				<h3>Code: {code}</h3>
				<p className="f1 f3-ns lh-copy measure">Name: <strong>{nativeName}</strong></p>
				<p className="f2 f3-ns lh-copy measure">English Name: {name}</p>
				<p>(Capital)City: {capitalCity}</p>
			</div>
		</div>
	);
}

export default Card;








