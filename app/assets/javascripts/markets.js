$(document).ready(function(){
  var map = L.map('map').setView([26.128807, -80.14497], 9),
      markers = L.layerGroup();
  
  markers.addTo(map);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mjesuele.medcme14',
    accessToken: 'pk.eyJ1IjoibWplc3VlbGUiLCJhIjoiYWNlMTk1OTUwMzg4ZjNiODhjZWQwMzY5MWY2NWQwZTUifQ.7g81IuO6O_VQ1RMumb4sRg#3/0.00/0.00'
  }).addTo(map);
  
  $.ajax({
    dataType: 'json',
    url: '/markets.json',
    success: function(markets) {
      placeMarkers(markets, map);
    }
  });

  $('#map-form').submit(function(event) {
    event.preventDefault();

    searchForZip(
      $(this).find('[name="zip"]').val()
    );
    return false;
  });

  function placeMarkers(mkts, map) {
    markers.clearLayers();
    mkts.forEach(function(mkt) {
      var coords = [mkt["latitude"], mkt["longitude"]];
      L.marker(coords).addTo(markers);
    });
  }

  function renderList(mkts) {
    // console.log(mkts.length);
    if (mkts.length == 0) {
      $('.market-table').hide();
      return $('.error')
        .text('No markets found')
        .show();
    }

    $('.error').hide();
    $('.market-table').show();
    $('.market-table tbody').empty();
    mkts.forEach(function(mkt) {
      var $row = $('<tr>'),
          $name = $('<td>'),
          $link = $('<a>')
            .attr('href', '/markets/' + mkt.id)
            .text(mkt.name),
          $addr = $('<td>').text(mkt.address),
          $zip = $('<td>').text(mkt.zip);

      $name.append($link);

      $row
        .append($name)
        .append($addr)
        .append($zip)
        .appendTo('.market-table tbody');
    });
  }
  
  function showError(err) {
    $('.market-table').hide();
    $('.error')
      .text(err.message)
      .show();
  }

  function searchForZip(zip) {
    var url = '/markets/search/' + zip + '.json';
    $.ajax({
      dataType: 'json',
      url: url,
      success: function(mkts) {
        renderList(mkts);
        placeMarkers(mkts, map);
      },
      error: function(err) {
        showError(err);
      }
    });
  }
});