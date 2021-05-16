const DEFAULT_SETTINGS = {
	'pause':5000,
	'display':2000
};

const SETTINGS_HELP = {
	'pause':"Time in ms card stack stays hidden between displays",
	'display':"Time in ms to show each card"
}

const BASE_URL = window.location.protocol + "//" +window.location.host;

const FRAME_TYPES = [
	'img',
	'text'
];

const PLACEHOLDER_FRAMES = [
	{'type':'img', 'value':BASE_URL+'/placeholders/pies.png'},
	{'type':'img', 'value':BASE_URL+'/placeholders/md.png'},
	{'type':'img', 'value':BASE_URL+'/placeholders/beer.png'}
];