var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlehybrid_1 = new ol.layer.Tile({
            'title': 'Google hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_ViviendasenreasruralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_3 = format_ViviendasenreasruralesINDEC_3.readFeatures(json_ViviendasenreasruralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_3.addFeatures(features_ViviendasenreasruralesINDEC_3);
var lyr_ViviendasenreasruralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_3, 
                style: style_ViviendasenreasruralesINDEC_3,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_0.png" /> 0<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_1.png" /> 257<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_2.png" /> 365<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 0<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 39.600<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 47.700<br />'
        });
var format_CabezasdeporcinosMAGyP_5 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_5 = format_CabezasdeporcinosMAGyP_5.readFeatures(json_CabezasdeporcinosMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_5.addFeatures(features_CabezasdeporcinosMAGyP_5);
var lyr_CabezasdeporcinosMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_5, 
                style: style_CabezasdeporcinosMAGyP_5,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_1.png" /> 12<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_2.png" /> 1.912<br />'
        });
var format_CabezasdeovinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_6 = format_CabezasdeovinosMAGyP_6.readFeatures(json_CabezasdeovinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_6.addFeatures(features_CabezasdeovinosMAGyP_6);
var lyr_CabezasdeovinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_6, 
                style: style_CabezasdeovinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_1.png" /> 6<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_2.png" /> 343.302 <br />'
        });
var format_CabezasdebovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_7 = format_CabezasdebovinosMAGyP_7.readFeatures(json_CabezasdebovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_7.addFeatures(features_CabezasdebovinosMAGyP_7);
var lyr_CabezasdebovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_7, 
                style: style_CabezasdebovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_7_1.png" /> 513<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_7_2.png" /> 36.857<br />'
        });
var format_Localidades_8 = new ol.format.GeoJSON();
var features_Localidades_8 = format_Localidades_8.readFeatures(json_Localidades_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_8.addFeatures(features_Localidades_8);
var lyr_Localidades_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_8, 
                style: style_Localidades_8,
                interactive: true,
                title: '<img src="styles/legend/Localidades_8.png" /> Localidades'
            });
var format_BER_9 = new ol.format.GeoJSON();
var features_BER_9 = format_BER_9.readFeatures(json_BER_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_9.addFeatures(features_BER_9);
var lyr_BER_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_9, 
                style: style_BER_9,
                interactive: true,
                title: '<img src="styles/legend/BER_9.png" /> BER'
            });
var format_Delegacin_10 = new ol.format.GeoJSON();
var features_Delegacin_10 = format_Delegacin_10.readFeatures(json_Delegacin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_10.addFeatures(features_Delegacin_10);
var lyr_Delegacin_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_10, 
                style: style_Delegacin_10,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_10.png" /> Delegación'
            });

lyr_Googlemaps_0.setVisible(true);lyr_Googlehybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ViviendasenreasruralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_CabezasdeporcinosMAGyP_5.setVisible(true);lyr_CabezasdeovinosMAGyP_6.setVisible(true);lyr_CabezasdebovinosMAGyP_7.setVisible(true);lyr_Localidades_8.setVisible(true);lyr_BER_9.setVisible(true);lyr_Delegacin_10.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_Googlehybrid_1,lyr_Departamentos_2,lyr_ViviendasenreasruralesINDEC_3,lyr_PEAINDEC_4,lyr_CabezasdeporcinosMAGyP_5,lyr_CabezasdeovinosMAGyP_6,lyr_CabezasdebovinosMAGyP_7,lyr_Localidades_8,lyr_BER_9,lyr_Delegacin_10];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldAliases', {'vivrur': 'vivrur', });
lyr_PEAINDEC_4.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_6.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdebovinosMAGyP_7.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_Localidades_8.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_9.set('fieldAliases', {'Localidad': 'Localidad', 'Delegacion': 'Delegacion', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Delegacin_10.set('fieldAliases', {'localidad': 'localidad', });
lyr_Departamentos_2.set('fieldImages', {'Depto': '', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldImages', {'vivrur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_6.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_7.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_Localidades_8.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_9.set('fieldImages', {'Localidad': 'TextEdit', 'Delegacion': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Delegacin_10.set('fieldImages', {'localidad': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldLabels', {'vivrur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_6.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_7.set('fieldLabels', {'bovinos': 'inline label', });
lyr_Localidades_8.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_9.set('fieldLabels', {'Localidad': 'inline label', 'Delegacion': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Delegacin_10.set('fieldLabels', {'localidad': 'inline label', });
lyr_Delegacin_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});