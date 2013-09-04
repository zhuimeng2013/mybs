jQuery(function($){

    if($('#chart')[0]){
        var chart = $('#chart').flash({
            swf        : '../static/plugins/beechart/beechart-bar.swf',
            width      : 980,
            height     : 400,
            allowScriptAccess : "always",
            flashvars  : {
                dataUrl : $('#chart').data('url'),
                w:920,
                h:300
            }
        });
    }
});