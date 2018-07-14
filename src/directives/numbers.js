const keypress = e => {
	const charCode = e.which ? e.which : evt.keyCode
	if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
		e.preventDefault()
	} else {
		return true;
	}
}

export default {
	bind: el => el.addEventListener('keypress', keypress),
	unbind: el => el.removeEventListener('keypress', keypress)
}