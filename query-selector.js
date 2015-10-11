/**
 * querySelector : querySelector(query, [scope])
 * Convenience function to access `document.querySelector`.
 *
 *     var q = require('dom101/query-selector');
 *     addClass(q('#instructions'), 'hidden');
 */

function querySelector (query, scope) {
  return (scope || document).querySelector(query);
}

module.exports = querySelector;
