/**
 * querySelectorAll : querySelectorAll(query, [scope])
 * Convenience function to access `document.querySelectorAll`.
 *
 *     var each = require('dom101/each');
 *     var qa = require('dom101/query-selector-all');
 *
 *     each(qa('.button'), function (el) {
 *       addClass('el', 'selected');
 *
 *       var child = qa('.child', el);
 *     });
 */

function querySelectorAll (query, scope) {
  return (scope || document).querySelectorAll(query);
}

module.exports = querySelectorAll;
