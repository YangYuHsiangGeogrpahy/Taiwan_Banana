var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_COUNTY_MOI_1090820_1 = new ol.format.GeoJSON();
var features_COUNTY_MOI_1090820_1 = format_COUNTY_MOI_1090820_1.readFeatures(json_COUNTY_MOI_1090820_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUNTY_MOI_1090820_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUNTY_MOI_1090820_1.addFeatures(features_COUNTY_MOI_1090820_1);
var lyr_COUNTY_MOI_1090820_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COUNTY_MOI_1090820_1, 
                style: style_COUNTY_MOI_1090820_1,
                interactive: true,
    title: 'COUNTY_MOI_1090820 複製<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_5.png" /> 100000 - 107593<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
    title: '質心<br />\
    <img src="styles/legend/_2_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/_2_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/_2_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/_2_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/_2_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/_2_5.png" /> 100000 - 107593<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_COUNTY_MOI_1090820_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_COUNTY_MOI_1090820_1,lyr__2];
lyr_COUNTY_MOI_1090820_1.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '2022年香蕉產量_公噸': '2022年香蕉產量_公噸', '2021年香蕉產量_公噸': '2021年香蕉產量_公噸', '2022年鳳梨產量_公噸': '2022年鳳梨產量_公噸', '2021年鳳梨產量_公噸': '2021年鳳梨產量_公噸', '2022年香蕉每公頃平均產量_公斤': '2022年香蕉每公頃平均產量_公斤', '2021年香蕉每公頃平均產量_公斤': '2021年香蕉每公頃平均產量_公斤', '2022年鳳梨每公頃平均產量_公斤': '2022年鳳梨每公頃平均產量_公斤', '2021年鳳梨每公頃平均產量_公斤': '2021年鳳梨每公頃平均產量_公斤', });
lyr__2.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '2022年香蕉產量_公噸': '2022年香蕉產量_公噸', '2021年香蕉產量_公噸': '2021年香蕉產量_公噸', '2022年鳳梨產量_公噸': '2022年鳳梨產量_公噸', '2021年鳳梨產量_公噸': '2021年鳳梨產量_公噸', '2022年香蕉每公頃平均產量_公斤': '2022年香蕉每公頃平均產量_公斤', '2021年香蕉每公頃平均產量_公斤': '2021年香蕉每公頃平均產量_公斤', '2022年鳳梨每公頃平均產量_公斤': '2022年鳳梨每公頃平均產量_公斤', '2021年鳳梨每公頃平均產量_公斤': '2021年鳳梨每公頃平均產量_公斤', });
lyr_COUNTY_MOI_1090820_1.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '2022年香蕉產量_公噸': 'TextEdit', '2021年香蕉產量_公噸': 'TextEdit', '2022年鳳梨產量_公噸': 'TextEdit', '2021年鳳梨產量_公噸': 'TextEdit', '2022年香蕉每公頃平均產量_公斤': 'TextEdit', '2021年香蕉每公頃平均產量_公斤': 'TextEdit', '2022年鳳梨每公頃平均產量_公斤': 'TextEdit', '2021年鳳梨每公頃平均產量_公斤': 'TextEdit', });
lyr__2.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '2022年香蕉產量_公噸': 'TextEdit', '2021年香蕉產量_公噸': 'TextEdit', '2022年鳳梨產量_公噸': 'TextEdit', '2021年鳳梨產量_公噸': 'TextEdit', '2022年香蕉每公頃平均產量_公斤': 'TextEdit', '2021年香蕉每公頃平均產量_公斤': 'TextEdit', '2022年鳳梨每公頃平均產量_公斤': 'TextEdit', '2021年鳳梨每公頃平均產量_公斤': 'TextEdit', });
lyr_COUNTY_MOI_1090820_1.set('fieldLabels', {'COUNTYID': 'header label', 'COUNTYCODE': 'header label', 'COUNTYNAME': 'header label', 'COUNTYENG': 'header label', '2022年香蕉產量_公噸': 'header label', '2021年香蕉產量_公噸': 'header label', '2022年鳳梨產量_公噸': 'header label', '2021年鳳梨產量_公噸': 'header label', '2022年香蕉每公頃平均產量_公斤': 'header label', '2021年香蕉每公頃平均產量_公斤': 'header label', '2022年鳳梨每公頃平均產量_公斤': 'header label', '2021年鳳梨每公頃平均產量_公斤': 'header label', });
lyr__2.set('fieldLabels', {'COUNTYID': 'header label', 'COUNTYCODE': 'header label', 'COUNTYNAME': 'header label', 'COUNTYENG': 'header label', '2022年香蕉產量_公噸': 'header label', '2021年香蕉產量_公噸': 'header label', '2022年鳳梨產量_公噸': 'header label', '2021年鳳梨產量_公噸': 'header label', '2022年香蕉每公頃平均產量_公斤': 'header label', '2021年香蕉每公頃平均產量_公斤': 'header label', '2022年鳳梨每公頃平均產量_公斤': 'header label', '2021年鳳梨每公頃平均產量_公斤': 'header label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});