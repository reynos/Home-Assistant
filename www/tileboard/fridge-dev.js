/*
 Fridge tablet configuration file.
*/
/*
                 {
                    position: [0, 0],
                    id: 'camera.front_gate_live',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 1,
                    state: false,
                    fullscreen: {
                       type: TYPES.CAMERA_STREAM,
                       objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                       id: 'camera.front_gate_live',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                       bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                    },
                    refresh: 1500,  // can be number in milliseconds
                    refresh: function () {  // can also be a function
                       return 3000 + Math.random() * 1000
                    }
                 },
*/

// var DOORENTRY_TILE = {
// /*      position: [0, 0],
//       type: TYPES.CAMERA_STREAM,
//       id: {},
//       icon: 'mdi-cctv',
//       title: 'Front gate',
//       state: false,
//       layout: {
//             type: TYPES.CAMERA_STREAM,
//             id: 'camera.front_gate_live',
//             refresh: 1500,
//             bgSize: 'cover'
//          },
//          page: {},
//          tiles: [
//              // Define your tiles (door-entry buttons) here if required
//         ]
//       }
//
//    { */
//       position: [0, 0],
//       id: 'camera.front_gate_live',
//       type: TYPES.CAMERA,
//       bgSize: 'cover',
//       width: 1,
//       state: false,
//       fullscreen: {
//          type: TYPES.CAMERA_STREAM,
//          objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
//          id: 'camera.front_gate_live',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
//          bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
//       },
//       refresh: 1500,  // can be number in milliseconds
//       refresh: function () {  // can also be a function
//          return 3000 + Math.random() * 1000
//       }
//    }




var CONFIG = {
   customTheme: CUSTOM_THEMES.COMPACT, // null, CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections
   locale: 'en-gb', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
   // next fields are optional
   events: [
       {
           command: 'open_doorentry',
           action: function(eventData) {
              this.$scope.openDoorEntry(DOORENTRY_TILE, DOORENTRY_TILE.id);
           }
       },
       // enables "toaster" popups in the bottom right corner
       {
          command: 'notify',
          action: function(e) {
             window.Noty.addObject(e);
          }
       },

   ],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
   onReady: function () {},

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         margin: '30px 80px 0',
         fontSize: '28px'
      },
      right: [
         // {
         //    type: HEADER_ITEMS.CUSTOM_HTML,
         //    html: ''
         // },
         // {
         //    type: HEADER_ITEMS.WEATHER,
         //    styles: {
         //       margin: '0'
         //    },
         //    icon: '&weather.bondi.state',
         //    state: '&weather.bondi.state',
         //    icons: {
         //       'clear-day': 'clear',
         //       'clear-day': 'clear',
         //       'clear-night': 'nt-clear',
         //       'cloudy': 'cloudy',
         //       'exceptional': 'unknown',
         //       'fog': 'fog',
         //       'hail': 'sleet',
         //       'lightning': 'chancestorms',
         //       'lightning-rainy': 'tstorms',
         //       'partly-cloudy-day': 'partlycloudy',
         //       'partly-cloudy-night': 'nt-partlycloudy',
         //       'pouring': 'rain',
         //       'snowy': 'snow',
         //       'snowy-rainy': 'sleet',
         //       'wind': 'unknown',
         //       'windy': 'unknown',
         //       'windy-variant': 'unknown'
         //    },
         //    states: {
         //       'clear-night': 'Clear, night',
         //       'cloudy': 'Cloudy',
         //       'exceptional': 'Exceptional',
         //       'fog': 'Fog',
         //       'hail': 'Hail',
         //       'lightning': 'Lightning',
         //       'lightning-rainy': 'Lightning, rainy',
         //       'partlycloudy': 'Partly cloudy',
         //       'pouring': 'Pouring',
         //       'rainy': 'Rainy',
         //       'snowy': 'Snowy',
         //       'snowy-rainy': 'Snowy, rainy',
         //       'sunny': 'Sunny',
         //       'windy': 'Windy',
         //       'windy-variant': 'Windy'
         //    },
         //    fields: {
         //       temperature: '&weather.bondi.attributes.temperature',
         //       temperatureUnit: '°C',
         //    }
         //  }
      ],
      left: [
/*         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: '<b><i>24 Avoca Street</b></i>'
         }, */
         // {
         //    type: HEADER_ITEMS.DATETIME,
         //    dateFormat: 'EEEE, dd LLLL', //https://docs.angularjs.org/api/ng/filter/date
         // },
         {
            type: HEADER_ITEMS.DATE,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         },
         // {
         //    type: HEADER_ITEMS.TIME,
         // },
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline', // home icon
         groupMarginCss: '20px 4px',
         groups: [
            {
               title: 'Music',
               width: 1.2,
               height: 3,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     width: 1.2,
                     id: 'media_player.kitchen',
                     type: TYPES.MEDIA_PLAYER,
                     hideSource: false,
                     textSource: '',
                     hideMuteButton: false,
                     state: false,
                     //state: '@attributes.media_title',
                     customStyles: {
                       'backgroundColor': '#000000',
                     },
                     subtitle: '@attributes.media_title',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [0, 1],
                     width: 1.2,
                     id: 'media_player.deck',
                     type: TYPES.MEDIA_PLAYER,
                     hideSource: false,
                     textSource: '',
                     hideMuteButton: false,
                     state: false,
                     //state: '@attributes.media_title',
                     customStyles: {
                       'backgroundColor': '#000000',
                     },
                     subtitle: '@attributes.media_title',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [0, 2],
                     width: 1.2,
                     id: 'media_player.lounge_room',
                     type: TYPES.MEDIA_PLAYER,
                     hideSource: false,
                     textSource: '',
                     hideMuteButton: false,
                     state: false,
                     //state: '@attributes.media_title',
                     customStyles: {
                       'backgroundColor': '#000000',
                     },
                     subtitle: '@attributes.media_title',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [0, 3],
                     width: 1.2,
                     id: 'media_player.play_room_tv',
                     type: TYPES.MEDIA_PLAYER,
                     hideSource: false,
                     textSource: '',
                     hideMuteButton: false,
                     state: false,
                     //state: '@attributes.media_title',
                     customStyles: {
                       'backgroundColor': '#000000',
                     },
                     subtitle: '@attributes.media_title',
                     bgSuffix: '@attributes.entity_picture',
                  },

               ]
            },

            {
               title: 'Lights',
               width: 3,
               height: 3,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                 {
                    position: [0, 0],
                    title: 'Kitchen',
                    subtitle: 'High',
                    id: 'light.kitchen_high_level_6',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [1, 0],
                    title: 'Kitchen',
                    subtitle: 'Low',
                    id: 'light.kitchen_low_level_4',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [2, 0],
                    title: 'Front Porch',
                    subtitle: '',
                    id: 'light.front_porch_light_86_2',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                 },
                 {
                    position: [2, 1],
                    title: "Girl's Room",
                    subtitle: '',
                    id: 'light.girls_bedroom_downlights',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                 },
                 {
                    position: [0, 1],
                    title: 'Lounge',
                    subtitle: '',
                    id: 'light.lounge_level_6',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [1, 1],
                    title: 'Lounge',
                    subtitle: 'TV',
                    id: 'light.tv_level_8',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [0, 2],
                    title: 'Hall',
                    subtitle: '',
                    id: 'light.hall_level_10',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [1, 2],
                    title: 'Stairs',
                    subtitle: '',
                    id: 'light.stairs_33_2',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                    ],
                 },
                 {
                    position: [0, 3],
                    title: 'Deck',
                    subtitle: '',
                    id: 'switch.back_deck',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                 },
                 {
                    position: [1, 3],
                    title: 'Backyard Floodlight',
                    subtitle: '',
                    id: 'switch.backyard_floodlight',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                 },
               ]
            },
            {
               title: 'Surveillance',
               width: 2,
               height: 3,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                 {
                    position: [0, 0],
                    id: 'camera.front_gate_live',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 1,
                    state: false,
                    fullscreen: {
                       type: TYPES.CAMERA_STREAM,
                       objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                       id: 'camera.front_gate_live',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                       bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                    },
                    refresh: 1500,  // can be number in milliseconds
                    refresh: function () {  // can also be a function
                       return 3000 + Math.random() * 1000
                    }
                 },
                 {
                    position: [1, 0],
                    id: 'camera.frontcam',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 1,
                    state: false,
                    // fullscreen: {
                    //    type: TYPES.CAMERA_STREAM,
                    //    objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                    //    id: 'camera.frontcam_high',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                    //    bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                    // },
                    refresh: 1500,  // can be number in milliseconds
                    refresh: function () {  // can also be a function
                       return 3000 + Math.random() * 1000
                    }
                 },

                 {
                    position: [0, 1],
                    id: 'camera.nurserycam',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 2,
                    height: 2,
                    state: false,
                    fullscreen: {
                       type: TYPES.CAMERA_STREAM,
                       objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                       id: 'camera.nurserycam',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                       bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                    },
                    refresh: 1500,  // can be number in milliseconds
                    refresh: function () {  // can also be a function
                       return 3000 + Math.random() * 1000
                    }
                 },
                 // {
                 //    position: [0, 3],
                 //    type: TYPES.SENSOR,
                 //    title: 'Calendar',
                 //    id: 'sensor.template_calendar_family',
                 //    customStyles: {
                 //      'fontSize': '8px',
                 //      'backgroundColor': '#000000',
                 //    },
                 //    unit: '', // override default entity unit
                 //    state: false, // hidding state
                 // },
                 {
                    position: [0, 3],
                    width: 2,
                    type: TYPES.TEXT_LIST,
                    id: {}, // using empty object for an unknown id
                    state: false, // disable state element
                    list: [
                       {
                          title: '&sensor.template_calendar_family.attributes.friendly_name',
                          icon: 'mdi-weather-sunny',
                          value: '&sensor.template_calendar_family.state'
                       },
                       {
                          value: '&sensor.template_calendar_family.state'
                       },
                       // {
                       //    value: '&calendar.family.attributes.message'
                       // }
                    ]
                 },

               ]
            },
            {
               title: 'Other',
               width: 2,
               height: 3,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
/*
                 {
                    position: [0, 0],
                    width: 1.2,
                    height: 0.9,
                    type: TYPES.SENSOR,
                    title: 'Solar Power',
                    id: 'sensor.solaredge_current_power_template',
                    unit: 'kW', // override default entity unit
                    state: false, // hidding state
                    filter: function (value) { // optional
                       var num = parseFloat(value);
                       return num && !isNaN(num) ? num.toFixed(1) : value;
                    },
                 },*/
                 {
                    position: [0, 0],
                    width: 1.2,
                    height: 1,
                    type: TYPES.HISTORY,
                    id: 'sensor.solaredge_current_power_template',
                    title: 'Solar Power Today',
                    subtitle: function (item, entity) {
                       return 'since ' + timeAgo(Date.now() - (item.offset || 24*3600*1000));
                    },
                    offset: 0.5*24*3600*1000,
                    options: MINIMAL_CHART_OPTIONS,
                 },
                 {
                    position: [0, 1],
                    width: 1.2,
                    height: 1.1,
                    title: '',
                    subtitle: '',
                    type: TYPES.GAUGE,
                    id: 'sensor.template_sensor_emoncms_net_grid_power',//'input_number.test_power_selector', // Assign the sensor you want to display on the gauge
                    customStyles: function (item, entity) {
                       if (entity.state <= -1.5) {
                         return {
                           'backgroundColor': '#16c04c', //bright green
                     	     'color': '#fff',
                           };
                       } else {
                         if (entity.state <= 0.1) {
                           return {
                             'backgroundColor': '#15997f', //green
                       	     'color': '#fff',
                             };
                         } else {
                           if (entity.state <= 1) {
                             return {
                               'backgroundColor': '#e6de00', //yellow
                         	     'color': '#000',
                               };
                           } else {
                             if (entity.state <= 2) {
                               return {
                                 'backgroundColor': '#f28747', //orange
                           	     'color': '#000',
                                 };
                             } else {
                               if (entity.state <= 3) {
                                 return {
                                   'backgroundColor': '#dd4c49', //red
                             	     'color': '#000',
                                   };
                               } else {
                                   return {
                                     'backgroundColor': '#c23847', //dark red
                           		       'color': '#000',
                               		   };
                             	     }
                                 }
                               }
                             }
                           }
                    }, //custom style end
                    value: function(item, entity){
                       return Math.abs(entity.state);
                    },
                    settings: {
                       size: 180, // Defaults to 50% of either height or width, whichever is smaller
                       type: 'arch', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                       min: 0, // Defaults to 0
                       max: 6, // Defaults to 100
                       cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                       thick: 15, // Defaults to 6
                       label: 'House Power', // Defaults to undefined
                       append: '@attributes.unit_of_measurement', // Defaults to undefined
                       prepend: '', // Defaults to undefined
                       duration: 1500, // Defaults to 1500ms
                       thresholds: { 0: { color: 'LightGray'}, 4.6: { color: 'maroon'}},//{ 0: { color: 'lime'}, 0.1: { color: 'orange'}, 1.5: { color: 'red' }, 3: { color: 'maroon'}},
                       labelOnly: false, // Defaults to false
                       foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                       backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                       fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                    },
                 },
                 {
                    position: [0, 2.1],
                    width: 1.2,
                    height: 0.9,
                    type: TYPES.SENSOR_ICON,
                    title: 'Front Door',
                    id: 'sensor.front_door_sensor_template',
                    customStyles: function (item, entity) {
                       if (entity.state == 'Open') {
                         return {
                           'backgroundColor': '#dd4c49',
                     	     'color': '#000',
                           };
                       } else {
                           return {
                             'backgroundColor': '#15997f',
                   		       'color': '#fff',
                       		   };
                     	     }
                    }, //custom style end
                    icons: {
                       Open: 'mdi-door-open',
                       Closed: 'mdi-door-closed'
                    },
                 },
                 {
                     position: [0, 3],
                     width: 1.2,
                     height: 1,
                     type: TYPES.SENSOR_ICON,
                     id: 'sensor.template_calendar_bin_nights',
                     title: '&sensor.template_calendar_bin_nights.state',
                     state: false,
                     icon: 'mdi-trash-can-outline',
                     customStyles: function (item, entity) {
                       if ('&binary_sensor.bin_night' == 'on') {
                         if (entity.state == 'Red Yellow Bins') {
                           return {
                             'backgroundColor': '#e6de00',
                     		     'color': '#000',
                             };
                         } else {
                             return {
                               'backgroundColor': '#1565c0',
                     		       'color': '#fff',
                         		   };
                       	     }
                       } else {
                           return {
                             'opacity': '0',
                   	         };
                           } // else end
                       } //custom style end
                   } //tile end
///                 }
               ]
            },
///// end of section
         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-gauge',
         groups: [
            {
               title: '',
               width: 8,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     type: TYPES.SENSOR,
                     title: 'Washer Power',
                     id: 'sensor.washer_watts',
                     unit: 'W', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(0) : value;
                     },
                      customStyles: function (item, entity) {
                         if (entity.state <= -10) {
                           return {
                             'backgroundColor': '#16c04c', //bright green
                       	     'color': '#fff',
                             };
                         } else {
                           if (entity.state <= 100) {
                             return {
                               'backgroundColor': '#15997f', //green
                         	     'color': '#fff',
                               };
                           } else {
                             if (entity.state <= 500) {
                               return {
                                 'backgroundColor': '#e6de00', //yellow
                           	     'color': '#000',
                                 };
                             } else {
                               if (entity.state <= 1500) {
                                 return {
                                   'backgroundColor': '#f28747', //orange
                             	     'color': '#000',
                                   };
                               } else {
                                 if (entity.state <= 2000) {
                                   return {
                                     'backgroundColor': '#dd4c49', //red
                               	     'color': '#000',
                                     };
                                 } else {
                                     return {
                                       'backgroundColor': '#c23847', //dark red
                             		       'color': '#000',
                                 		   };
                               	     }
                                   }
                                 }
                               }
                             }
                      }, //custom style end
                  },
                  {
                     position: [1, 0],
                     type: TYPES.SENSOR,
                     title: 'Washer Amps',
                     id: 'sensor.washer_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 1],
                     type: TYPES.SENSOR,
                     title: 'Dryer Power',
                     id: 'sensor.dryer_watts',
                     unit: 'W', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(0) : value;
                     },
                      customStyles: function (item, entity) {
                         if (entity.state <= -10) {
                           return {
                             'backgroundColor': '#16c04c', //bright green
                       	     'color': '#fff',
                             };
                         } else {
                           if (entity.state <= 100) {
                             return {
                               'backgroundColor': '#15997f', //green
                         	     'color': '#fff',
                               };
                           } else {
                             if (entity.state <= 500) {
                               return {
                                 'backgroundColor': '#e6de00', //yellow
                           	     'color': '#000',
                                 };
                             } else {
                               if (entity.state <= 1500) {
                                 return {
                                   'backgroundColor': '#f28747', //orange
                             	     'color': '#000',
                                   };
                               } else {
                                 if (entity.state <= 2000) {
                                   return {
                                     'backgroundColor': '#dd4c49', //red
                               	     'color': '#000',
                                     };
                                 } else {
                                     return {
                                       'backgroundColor': '#c23847', //dark red
                             		       'color': '#000',
                                 		   };
                               	     }
                                   }
                                 }
                               }
                             }
                      }, //custom style end
                  },
                  {
                     position: [1, 1],
                     type: TYPES.SENSOR,
                     title: 'Dryer Amps',
                     id: 'sensor.dryer_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 2],
                     type: TYPES.SENSOR,
                     title: 'Dishwasher Power',
                     id: 'sensor.dishwasher_watts',
                     unit: 'W', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(0) : value;
                     },
                      customStyles: function (item, entity) {
                         if (entity.state <= -10) {
                           return {
                             'backgroundColor': '#16c04c', //bright green
                       	     'color': '#fff',
                             };
                         } else {
                           if (entity.state <= 100) {
                             return {
                               'backgroundColor': '#15997f', //green
                         	     'color': '#fff',
                               };
                           } else {
                             if (entity.state <= 500) {
                               return {
                                 'backgroundColor': '#e6de00', //yellow
                           	     'color': '#000',
                                 };
                             } else {
                               if (entity.state <= 1500) {
                                 return {
                                   'backgroundColor': '#f28747', //orange
                             	     'color': '#000',
                                   };
                               } else {
                                 if (entity.state <= 2000) {
                                   return {
                                     'backgroundColor': '#dd4c49', //red
                               	     'color': '#000',
                                     };
                                 } else {
                                     return {
                                       'backgroundColor': '#c23847', //dark red
                             		       'color': '#000',
                                 		   };
                               	     }
                                   }
                                 }
                               }
                             }
                      }, //custom style end
                  },
                  {
                     position: [1, 2],
                     type: TYPES.SENSOR,
                     title: 'Dishwasher Amps',
                     id: 'sensor.dishwasher_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 3],
                     type: TYPES.SENSOR,
                     title: 'Xmas lights Power',
                     id: 'sensor.xmas_lights_watts',
                     unit: 'W', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(0) : value;
                     },
                      customStyles: function (item, entity) {
                         if (entity.state <= -10) {
                           return {
                             'backgroundColor': '#16c04c', //bright green
                       	     'color': '#fff',
                             };
                         } else {
                           if (entity.state <= 100) {
                             return {
                               'backgroundColor': '#15997f', //green
                         	     'color': '#fff',
                               };
                           } else {
                             if (entity.state <= 500) {
                               return {
                                 'backgroundColor': '#e6de00', //yellow
                           	     'color': '#000',
                                 };
                             } else {
                               if (entity.state <= 1500) {
                                 return {
                                   'backgroundColor': '#f28747', //orange
                             	     'color': '#000',
                                   };
                               } else {
                                 if (entity.state <= 2000) {
                                   return {
                                     'backgroundColor': '#dd4c49', //red
                               	     'color': '#000',
                                     };
                                 } else {
                                     return {
                                       'backgroundColor': '#c23847', //dark red
                             		       'color': '#000',
                                 		   };
                               	     }
                                   }
                                 }
                               }
                             }
                      }, //custom style end
                  },
                  {
                     position: [1, 3],
                     type: TYPES.SENSOR,
                     title: 'Xmas lights Amps',
                     id: 'sensor.xmas_lights_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
               ]
            },
         ]
      },
      {
         title: 'Third page',
         bg: 'images/bg2.png',
         icon: 'mdi-flasf',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
               ]
            },
         ]
      }
   ],
}
