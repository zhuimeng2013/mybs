jQuery(function($){


    $(".datepicker").datepicker({
        altFormat: "yyyyy-mm-dd",
        appendText:"yyyy-mm-dd",
        dateFormat: "yy-mm-dd"
    });


    if($('#chart')[0]){
        $.ajax({
            url:$('#chart').data('url'),
            type:'GET',
            dataType:'json',
            success:function(){

            }
        }).done(function(res){

            if(res&&res.success){
                showCharts(res);
            }
        });
    }

    function showCharts(data){
        $('#chart').highcharts({

            chart: {
                type: data.type
            },
            title: {
                text: data.title,
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: data.categories
            },

            yAxis: {
                min: 0,
                title: {
                    text: data.yAxis
                }
            },
            colors: [
                '#0088cc',
                '#f5002f',
                '#8bbc21',
                '#910000',
                '#1aadce',
                '#492970',
                '#f28f43',
                '#77a1e5',
                '#c42525',
                '#a6c96a'
            ],
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.f}%</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: data.series
        });
    }
});