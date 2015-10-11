/**
 * off : off(el, event, fn)
 * Removes an event handler.
 *
 *     var off = require('dom101/off');
 *
 *     off(el, 'click', handler);
 */

function off (el, event, handler) {
  if (el.removeEventListener) {
    el.removeEventListener(event, handler);
  } else {
    // FIXME This most likely wont work because on() does warp the handler
    el.detachEvent('on' + event, handler);
  }
}

module.exports = off;
