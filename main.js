// Currently meteor still eagerly evaluates files,
// except for files in 'imports' directories.
// This is the main client side entry point,
// all other files should be nested under the 'imports' directory.
import root from './imports/index.jsx';
import html from 'html!./index.html';
export default function renderStatic(locals, callback) {
	callback(null, html);
}