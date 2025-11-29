var map = L.map('map', {
            minZoom: 12,
            maxBounds: L.latLngBounds([54.20, 18.25], [54.50, 19]),
        }
        ).setView([54.36 ,18.71], 12);
        L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=17PfRx5orX5Coeuq1LPW', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }).addTo(map);
        
        var geojsonLayer;
        var DaneDzielnic = {};

        function dzielnice(feature) {
                    return {
                            color: "#fb6f92",
                            weight: 2,
                            fillColor: "#fb6f92",
                            fillOpacity: 0.1,
                        };
                }
        
        fetch('ludnosc.json')
            .then(response => response.json())
            .then(statsData => {
                statsData.forEach(dzielnica => {
                    const nazwa = dzielnica.NAZWA;

                    if (nazwa) {
                        DaneDzielnic[nazwa] = {
                            populacja: dzielnica["liczba  ludności 2024 r."],
                            powierzchnia: dzielnica["pow. w km2 2024 r."],
                            kobiety: dzielnica["liczba kobiet"],
                            mezczyzni: dzielnica["liczba mężczyzn"],
                        };
                    }
                });

                return fetch('Dzielnice.geojson');
            })
            .then(response => response.json())
            .then(data => {
                geojsonLayer = L.geoJSON(data, {
                    style: dzielnice,

                    onEachFeature: function(feature, layer) {

                        var nazwa = feature.properties.NAZWA;
                        var statystyki = DaneDzielnic[nazwa];

                        var trescPopup = "<b style ='font-size: 20px;'>" + nazwa + "</b>";

                        if (statystyki) {
                            trescPopup += "</br><br style = 'font-size: 12px;'>Liczba ludności (2024): ";
                            trescPopup += "<br><span style='font-size: 20px;'>" + statystyki.populacja + "</span> osób";
                            trescPopup += "</br><br style = 'font-size: 12px;'>W tym: "
                            trescPopup += "<br><span style='font-size: 20px; color: #fb6f92;'>" + statystyki.kobiety + "</span> kobiet";
                            trescPopup += "&nbsp; &nbsp;&nbsp;&nbsp;<span style='font-size: 20px; color: #1949b0;'>" + statystyki.mezczyzni + "</span> mężczyzn";
                            trescPopup += "</br><br style = 'font-size: 12px;'>Powierzchnia (2024): ";
                            trescPopup += "<br><span style='font-size: 20px;'>" + statystyki.powierzchnia + "</span> km2";
                        }

                        layer.bindPopup(trescPopup);

                        layer.on({
                            mouseover: function(e) {
                                var layer = e.target;

                                layer.setStyle({
                                    color: "#fb6f92",
                                    weight: 2,
                                    fillColor: "#fb6f92",
                                    fillOpacity: 0.5,
                                });
                                layer.bringToFront();
                            },

                            mouseout: function(e) {
                                geojsonLayer.resetStyle(e.target);
                            },
                        });
                    }
                })
                .addTo(map)
            })