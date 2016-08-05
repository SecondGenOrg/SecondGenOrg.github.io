// Currently meteor still eagerly evaluates files,
// except for files in 'imports' directories.
// This is the main client side entry point,
// all other files should be nested under the 'imports' directory.
import root from './imports/index.jsx';
import html from 'html!./index.html';
var out = '[';
root.childRoutes.forEach((route) => {
	out += `'/${route.path}', `;
})
out+= ']';
console.log(out);
console.log('finished main.js');
console.log(JSON.stringify(root));
export default function renderStatic(locals, callback) {
	callback(null, html);
}