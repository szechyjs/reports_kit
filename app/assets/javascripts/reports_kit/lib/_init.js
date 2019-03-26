window.ReportsKit = {};

$(document).on('turbolinks:load', function() {
  $('.reports_kit_report').each(function(index, el) {
    var el = $(el)
    var reportClass = el.data('report-class');
    new ReportsKit[reportClass]().render({ 'el': el });
  });
});
