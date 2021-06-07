/*
 * This file is part of the tryton themes.
 * Please see the COPYRIGHT and README.rst files at the top level of this
 * repository for full copyright notices, license terms and support
 * information.
 */
'use strict';

jQuery(document).ready(function() {
    Sao.Session.get_credentials_standard = Sao.Session.get_credentials;
    Sao.Session.get_credentials = function() {
        jQuery('body').addClass('login');
        var promise = Sao.Session.get_credentials_standard();
        promise.always(function () {
            jQuery('body').removeClass('login');
        });
        return promise;
    };
});
