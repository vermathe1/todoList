import React from 'react';
import loadingImg from '../images/source.gif';

const LoadingImage = ()=>{
	return(
		<div className = "loading-img-cont">
			<img src = {loadingImg} className = "loading-img block" alt= "loading"/>
		</div>
	);
}
export default LoadingImage;