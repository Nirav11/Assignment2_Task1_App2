require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "dark-gray"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
    xmin: -12500000,
    ymin: 3000000,
    xmax: -7000000,
    ymax: 6500000,
    spatialReference: 102100
    }
  });
  /********************
   * Add feature layer
   ********************/

  var featureLayer_1 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Boundaries_2022/FeatureServer/1",
    renderer: {
    type: "simple",  
    symbol: {
      type: "simple-fill",  
      color: "transparent",  // No fill color
      outline: {  // autocasts as new SimpleLineSymbol()
        color: "blue",  // Outline color
        width: "2px"  // Outline width
      }
    }
  },
    popupTemplate: {
      title: "State: {STATE_NAME}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "STATE_ABBR",
              label: "State Abbreviation",
              visible: true
            },
            {
              fieldName: "STATE_FIPS",
              label: "STATE_FIPS",
              visible: true
            },
            {
              fieldName: "STATE_NAME",
              label: "STATE_NAME",
              visible: true
            },          
            {
              fieldName: "POPULATION_2022",
              label: "POPULATION_2022",
              visible: true
            }, 
            {
              fieldName: "POP22_SQMI",
              label: "POP22_SQMI",
              visible: true
            },   
            {
              fieldName: "SQMI",
              label: "SQMI",
              visible: true
            },   
          ]
        }
      ]
    }
  });

  map.add(featureLayer_1);

  var featureLayer_2 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Parks/FeatureServer/0",
    popupTemplate: {
    title: "{Name}",
    content: [{
      type: "fields",
      fieldInfos: [
                    {
              fieldName: "Feature Type  ",
              label: "Feature Type	",
              visible: true
            },
            {
              fieldName: "Area in SQ MI  ",
              label: "Area in SQ MI	",
              visible: true
            },
          ]
        }
      ]
    }
  });

  map.add(featureLayer_2);
});
