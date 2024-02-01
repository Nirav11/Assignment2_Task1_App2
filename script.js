require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "dark-gray"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
      // Updated extent to show the United States
      xmin: -13884029,
      ymin: 2812916,
      xmax: -7453304,
      ymax: 6338219,
      spatialReference: 102100
    }
  });
  /********************
   * Add feature layer
   ********************/

  var featureLayer_1 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Boundaries_2022/FeatureServer/1",
    renderer: {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: [0, 0, 0, 0],  // RGBA format, fully transparent
      outline: {  // autocasts as new SimpleLineSymbol()
        color: [0, 0, 0, 1],  // Solid black outline
        width: "1px"  // Outline width
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
    outFields: ["*"], // Fetch all fields
    popupTemplate: {
    title: "{Name}",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "*", // Automatically display all fields
          ]
        }
      ]
    }
  });

  map.add(featureLayer_2);
});
