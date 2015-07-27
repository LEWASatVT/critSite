var $ = require('jquery');

var apiHost = 'http://128.173.40.161:8000';

var leapi = {
    auth: function(email, password, fn) {
        $.ajax(
            {type: 'POST',
             url: apiHost+'/token',
             beforeSend: function(xhr) {
                 xhr.setRequestHeader('Authorization', 'Basic ' + bota(email + ':' + password));
             },
             success: function(response, status) {
                 fn({token:response.token});
             },
             error: function(jqXHR) {
                 fn({token:null})
             }
            });
    },
    postMedia: function(media, fn) {
        $.post(apiHost+'/media', media, function(response,status) {
            formData = new FormData();
            $.post(apiHost+response.href, formData, function(response,status) {
                fn(response,status);
            });
        });
    }
};

modules.export = leapi;
