"use strict";Sao.config.icon_colors="#267f82,#777,#d9534f".split(","),jQuery(document).ready(function(){Sao.Session.get_credentials_standard=Sao.Session.get_credentials,Sao.Session.get_credentials=function(){jQuery("body").addClass("login");var e=Sao.Session.get_credentials_standard();return e.always(function(){jQuery("body").removeClass("login")}),e}});
//# sourceMappingURL=custom.js.map