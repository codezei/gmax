
import faq from './modules/faq'
import works from './modules/works'
import header from './modules/header'
import services from './modules/services'
import reviews from './modules/reviews'
import cta from './modules/cta'
import details from './modules/details'
import why from './modules/why'
import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {
	faq()
	header()
	services()
	reviews()
	cta()
	works()
	details()
	why()
})

