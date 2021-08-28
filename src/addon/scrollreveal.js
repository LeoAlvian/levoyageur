

export default {
	beforeMount(el, binding){
		const animatedScrollObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					entry.target.classList.add(`enter-${binding.value}`)
				}
				else {
					entry.target.classList.remove(`enter-${binding.value}`)
				}
			})
		})
		el.classList.add(`before-enter-${binding.value}`)
		animatedScrollObserver.observe(el)
	}
}