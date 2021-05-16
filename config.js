const DEFAULT_SETTINGS = {
	'pause':5000,
	'display':2000,
	'disperse_deg':5
};

const SETTINGS_HELP = {
	'pause':"Time in ms card stack stays hidden between displays",
	'display':"Time in ms to show each card",
	'disperse_deg': "Card dispersion in +/- deg when shuffled to the back"
}

const BASE_URL = window.location.protocol + "//" + window.location.host + window.location.pathname.replace("build/", "");

const FRAME_TYPES = [
	'img',
	'text'
];

const PLACEHOLDER_FRAMES = [
	{'type':'img', 'value':BASE_URL+'placeholders/pies.png'},
	{'type':'img', 'value':BASE_URL+'placeholders/md.png'},
	{'type':'img', 'value':BASE_URL+'placeholders/beer.png'}
];