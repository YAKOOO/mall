export function debouce(func,delay) {
	let timer = null;
	return function (...args){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			func(...args)
		},delay)
	}

}