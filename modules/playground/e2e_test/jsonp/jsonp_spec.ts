/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {verifyNoBrowserErrors} from 'e2e_util/e2e_util';

describe('jsonp', function() {

  afterEach(verifyNoBrowserErrors);

  describe('fetching', function() {
    var URL = 'all/playground/src/jsonp/index.html';

    it('should fetch and display people', function() {
      browser.get(URL);
      expect(getComponentText('jsonp-app', '.people')).toEqual('hello, caitp');
    });
  });
});

function getComponentText(selector: any /** TODO #9100 */, innerSelector: any /** TODO #9100 */) {
  return browser.executeScript(
      'return document.querySelector("' + selector + '").querySelector("' + innerSelector +
      '").textContent.trim()');
}
