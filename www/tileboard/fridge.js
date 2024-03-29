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

var DOORBELL_TILE = {
   position: [0, 0],
   id: 'camera.front_gate_live',
   type: TYPES.CAMERA,
   bgSize: 'cover',
   width: 4,
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
}

   //
   //
   //    position: [0, 0],
   //    type: TYPES.CAMERA_STREAM,
   //    id: {},
   //    icon: 'mdi-cctv',
   //    title: 'Front gate',
   //    state: false,
   //    layout: {
   //          type: TYPES.CAMERA_STREAM,
   //          id: 'camera.front_gate_live',
   //          refresh: 1500,
   //          bgSize: 'cover'
   //       },
   //       page: {},
   //       tiles: [
   //           // Define your tiles (door-entry buttons) here if required
   //      ]
   //    }
   //
   // {
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
   locale: 'en-us', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
   // next fields are optional
   events: [
       {
           command: 'doorbell',
           action: function(eventData) {
              this.$scope.opendoorbell(DOORBELL_TILE, DOORBELL_TILE.id);
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
         margin: '5px 80px 0',
         fontSize: '28px'
      },
      right: [
         {
            type: HEADER_ITEMS.DATE,
            dateFormat: 'h:mm a', //https://docs.angularjs.org/api/ng/filter/date
            styles: { fontSize: '40px' },
         },
      ],
      left: [
         {
            type: HEADER_ITEMS.DATE,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         },

      ]
   },

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline', // home icon
         groupMarginCss: '20px 4px',
         groups: [
            {
               title: '',
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
                     id: 'media_player.lounge',
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
               title: '',
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
                       {
                          title: 'Color temp',
                          field: 'color_temp',
                          max: 650,
                          min: 50,
                          step: 50,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "color_temp"
                          }
                       }
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
                    position: [2, 2],
                    title: "Girl's Lamp",
                    subtitle: '',
                    id: 'light.girl_s_lamp',
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
                 {
                    position: [2, 3],
                    title: 'Playroom',
                    type: TYPES.SCRIPT,
                    id: 'script.playroom_off',
                    icons: {
                       on: "mdi-face-woman-outline",
                       off: "mdi-face-woman-outline"
                    },
                    state: false,
                    customStyles: function (item, entity) {
                      var playroomstate = this.parseFieldValue('&group.playroom.state')
                       if (playroomstate == 'on') {
                         return {
                           'backgroundColor': '#16c04c', //bright green
                     	     'color': '#fff',
                           };
                       } else {
                           return {
                             'backgroundColor': '#15997f', //green
                       	     'color': '#fff',
                             };
                         }
                    }
                 }
               ]
            },
            {
               title: '',
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
               title: '',
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

                       // var d = new Date();
                       // var n = d.getDay();
                       // // if it's Wednesday
                       // if (n == 3 ) {
                       //   if (entity.state == 'Red Yellow Bins') {
                       //     return {
                       //       'backgroundColor': '#e6de00',
                     		//      'color': '#000',
                       //       };
                       //   } else {
                       //       return {
                       //         'backgroundColor': '#1565c0',
                     		//        'color': '#fff',
                       //   		   };
                       // 	     }
                       // } else {
                       //     return {
                       //       'opacity': '0',
                   	   //       };
                       //     } // else end
                       // } //custom style end
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
               width: 2,
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
                     title: 'Breadmaker Power',
                     id: 'sensor.breadmaker_watts',
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
                     title: 'Breadmaker Amps',
                     id: 'sensor.breadmaker_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 4],
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
                       } //custom style end
                  },
                  {
                     position: [1, 4],
                     type: TYPES.SENSOR,
                     title: 'Xmas lights Amps',
                     id: 'sensor.xmas_lights_amps',
                     unit: 'A', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  }
              ],
            },
            {
               title: '',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     type: TYPES.SENSOR,
                     title: 'Outside Temp',
                     id: 'sensor.outside_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     customStyles: {
                       'backgroundColor': '#485569',
                     },
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 0],
                     type: TYPES.SENSOR,
                     title: 'Outside Humidity',
                     id: 'sensor.template_bondi_humidity',
                     unit: '%', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 1],
                     type: TYPES.SENSOR,
                     title: 'Kitchen Temp',
                     id: 'sensor.temperature_sensor_129',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     customStyles: {
                       'backgroundColor': '#485569',
                     },
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 1],
                     type: TYPES.SENSOR,
                     title: 'Kitchen Humidity',
                     id: 'sensor.humidity_sensor_131',
                     unit: '%', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 2],
                     type: TYPES.SENSOR,
                     title: 'Playroom Dyson Temp',
                     id: 'sensor.playroom_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     customStyles: {
                       'backgroundColor': '#485569',
                     },
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 2],
                     type: TYPES.SENSOR,
                     title: 'Playroom Dyson Humidity',
                     id: 'sensor.playroom_humidity',
                     unit: '%', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 3],
                     type: TYPES.SENSOR,
                     title: 'Ensuite Temp',
                     id: 'sensor.ensuite_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     customStyles: {
                       'backgroundColor': '#485569',
                     },
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 3],
                     type: TYPES.SENSOR,
                     title: 'Ensuite Humidity',
                     id: 'sensor.ensuite_humidity',
                     unit: '%', // override default entity unit
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
         title: 'Appliances',
         bg: 'images/bg2.png',
         icon: 'mdi-washing-machine',
         groupMarginCss: '20px 8px',
         groups: [
            {
               title: 'Washing Machine',
               width: 1.8,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1.8,
                     height: 1.1,
                     title: ' ',
                     id: 'sensor.washer_state',
                     type: TYPES.TEXT_LIST,
                     state: false,
                     filter: function (value, field) {
                        if(field === "value" && value === "unknown") {
                           return "0";
                        }

                        return value;
                     },
                     list: [
                        ["Washer State", "sensor.washer_state"],
                        ["Washer Voltage", "sensor.washer_voltage"],
                        ["Washer Watts", "sensor.washer_watts"],
                        ["Washer Amps", "sensor.washer_amps"],
                        ["Washer Energy Today", "sensor.washer_energy_today"],
                        ["Washer Energy Yesterday", "sensor.washer_energy_yesterday"],
                        ["Washer WiFi Signal", "sensor.washer_signal"],
                     ].map(function (item) {
                        var id = item[1];

                        return {
                           title: item[0],
                           value: '&' + id + '.state',
                           unit: '&' + id + '.attributes.unit_of_measurement',
                        }
                     })
                  },
               ]
            },
            {
               title: 'Dryer',
               width: 1.8,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1.8,
                     height: 1.1,
                     title: ' ',
                     id: 'sensor.dryer_state',
                     type: TYPES.TEXT_LIST,
                     state: false,
                     filter: function (value, field) {
                        if(field === "value" && value === "unknown") {
                           return "0";
                        }

                        return value;
                     },
                     list: [
                        ["Dryer State", "sensor.dryer_state"],
                        ["Dryer Voltage", "sensor.dryer_voltage"],
                        ["Dryer Watts", "sensor.dryer_watts"],
                        ["Dryer Amps", "sensor.dryer_amps"],
                        ["Dryer Energy Today", "sensor.dryer_energy_today"],
                        ["Dryer Energy Yesterday", "sensor.dryer_energy_yesterday"],
                        ["Dryer WiFi Signal", "sensor.dryer_signal"],
                     ].map(function (item) {
                        var id = item[1];

                        return {
                           title: item[0],
                           value: '&' + id + '.state',
                           unit: '&' + id + '.attributes.unit_of_measurement',
                        }
                     })
                  }
               ]
            },
            {
               title: 'Dishwasher',
               width: 1.8,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1.8,
                     height: 1.1,
                     title: ' ',
                     id: 'sensor.dishwasher_state',
                     type: TYPES.TEXT_LIST,
                     state: false,
                     filter: function (value, field) {
                        if(field === "value" && value === "unknown") {
                           return "0";
                        }

                        return value;
                     },
                     list: [
                        ["Dishwasher State", "sensor.dishwasher_state"],
                        ["Dishwasher Voltage", "sensor.dishwasher_voltage"],
                        ["Dishwasher Watts", "sensor.dishwasher_watts"],
                        ["Dishwasher Amps", "sensor.dishwasher_amps"],
                        ["Dishwasher Energy Today", "sensor.dishwasher_energy_today"],
                        ["Dishwasher Energy Yesterday", "sensor.dishwasher_energy_yesterday"],
                        ["Dishwasher WiFi Signal", "sensor.dishwasher_signal"],
                     ].map(function (item) {
                        var id = item[1];

                        return {
                           title: item[0],
                           value: '&' + id + '.state',
                           unit: '&' + id + '.attributes.unit_of_measurement',
                        }
                     })
                  }
               ]
            },
            {
               title: 'Turntable',
               width: 1.8,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1.8,
                     height: 1.1,
                     title: ' ',
                     id: 'sensor.turntable_state',
                     type: TYPES.TEXT_LIST,
                     state: false,
                     filter: function (value, field) {
                        if(field === "value" && value === "unknown") {
                           return "0";
                        }

                        return value;
                     },
                     list: [
                        ["Turntable State", "sensor.turntable_state"],
                        ["Turntable Voltage", "sensor.turntable_voltage"],
                        ["Turntable Watts", "sensor.turntable_watts"],
                        ["Turntable Amps", "sensor.turntable_amps"],
                        ["Turntable Energy Today", "sensor.turntable_energy_today"],
                        ["Turntable Energy Yesterday", "sensor.turntable_energy_yesterday"],
                        ["Turntable WiFi Signal", "sensor.turntable_signal"],
                     ].map(function (item) {
                        var id = item[1];

                        return {
                           title: item[0],
                           value: '&' + id + '.state',
                           unit: '&' + id + '.attributes.unit_of_measurement',
                        }
                     })
                  }
               ]
            },
            {
               title: 'Xmas Lights',
               width: 1.8,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1.8,
                     height: 1.1,
                     title: ' ',
                     id: 'sensor.xmas_lights_state',
                     type: TYPES.TEXT_LIST,
                     state: false,
                     filter: function (value, field) {
                        if(field === "value" && value === "unknown") {
                           return "0";
                        }

                        return value;
                     },
                     list: [
                        ["Xmas Lights State", "sensor.xmas_lights_state"],
                        ["Xmas Lights Voltage", "sensor.xmas_lights_voltage"],
                        ["Xmas Lights Watts", "sensor.xmas_lights_watts"],
                        ["Xmas Lights Amps", "sensor.xmas_lights_amps"],
                        ["Xmas Lights Energy Today", "sensor.xmas_lights_energy_today"],
                        ["Xmas Lights Energy Yesterday", "sensor.xmas_lights_energy_yesterday"],
                        ["Xmas Lights WiFi Signal", "sensor.xmas_lights_signal"],
                     ].map(function (item) {
                        var id = item[1];

                        return {
                           title: item[0],
                           value: '&' + id + '.state',
                           unit: '&' + id + '.attributes.unit_of_measurement',
                        }
                     })
                  }
               ]
            },
          ]
        },



      {
         title: 'Fourth page',
         bg: 'images/bg2.png',
         icon: 'mdi-flash',
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
