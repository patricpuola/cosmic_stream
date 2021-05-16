const FRAME_TYPES = [
	'img',
	'text'
];

const FLIP_STYLES = [
	'shuffle',
	'toss'
];

const DEFAULT_SETTINGS = {
	'pause':5000,
	'display':2000,
	'disperse_deg':5,
	'style': 'shuffle'
};

const SETTINGS_HELP = {
	'pause':"Time in ms card stack stays hidden between displays",
	'display':"Time in ms to show each card",
	'disperse_deg': "Card dispersion in +/- deg when shuffled to the back",
	'style': "Transition style from one card to another"
}

const SETTINGS_TYPE = {
	'pause':'number',
	'display':'number',
	'disperse_deg':'number',
	'style': FLIP_STYLES
}

const BASE_URL = window.location.protocol + "//" + window.location.host + window.location.pathname.replace("build/", "");



const PLACEHOLDER_FRAMES = [
	{'type':'img', 'value':BASE_URL+'placeholders/pies.png'},
	{'type':'img', 'value':BASE_URL+'placeholders/md.png'},
	{'type':'img', 'value':BASE_URL+'placeholders/beer.png'}
];