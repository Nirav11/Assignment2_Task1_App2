require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "dark-gray"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,

    extent: {
      // autocasts as new Extent()
      xmin: -9177811,
      ymin: 4247000,
      xmax: -9176791,
      ymax: 4247784,
      spatialReference: 102100
    }
  });

  /********************
   * Add feature layer
   ********************/

  var featureLayer_1 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Boundaries_2022/FeatureServer/1",
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
    url: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Land_Resources_Division_Boundary_and_Tract_Data_Service/FeatureServer/2",
    popupTemplate: {
      title: "{Name}",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Feature Type",
              label: "Feature Type",
              visible: true
            },
            {
              fieldName: "Area in SQ MI",
              label: "Area in SQ MI",
              visible: true
            },
            // Add other fields as needed
          ]
        }
      ]
    }
  });

  map.add(featureLayer_2);
});
