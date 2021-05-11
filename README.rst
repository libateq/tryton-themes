#############
Tryton Themes
#############

A set of themes for use with the Tryton web client (Sao).

Installation
============

If you are interested in just using the themes, rather than building and
altering them, then you will only need the pre-built files found inside the
dist directory.

Once you have followed the normal installation proccess for Sao you can then
apply the theme.

This is done by replacing, or adding, files in your Sao installation by the
ones from your chosen theme.  Each file from the `dist/<theme_name>/`
directory should be copied over to the matching place in your Sao installation.

Once you have restarted your Tryton server, and possibly also cleared your
browser's cache, you should be able to use Tryton with your chosen theme.

Building the Themes
===================

The build process uses npm and gulp.

.. code-block::

    cd tryton-themes
    npm install
    cd <theme-name>
    npx gulp

Support
=======

Any issues or bugs with these themes can be reported using the bug tracker:
https://bitbucket.org/libateq/tryton-themes/issues

If you are looking for commercial support, custom enhancements, or would just
like to support the maintenance and upkeep of these themes, then please don't
hesitate to get in touch:

* Email: Support <support@libateq.uk>
* Website: https://libateq.uk/support/

License and Copyright
=====================

Please refer to the LICENSE and COPYRIGHT files for for full copyright notices
and license terms.
