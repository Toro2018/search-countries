import React from 'react';
import Card from './Card';

const CardList =({countries}) =>{
	return(
		<div>
			{
				countries.map( ({alpha2Code, name, nativeName, capital, flag})=>{
					return (
						<Card 
							key={alpha2Code}
							code = {alpha2Code}
							name={name}
							nativeName = {nativeName} 
							capitalCity={capital}
							flag = {flag}
							/>
						);
				})
			}
		</div>
	);
}

export default CardList;