/*
 Front Door tablet configuration file.
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
   locale: 'en-us', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
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
               title: '',
               width: 1.8,
               height: 3,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                 {
                    position: [0, 0],
                    title: 'Front Gate',
                    classes: [CLASS_BIG],
                    type: TYPES.INPUT_BOOLEAN,
                    width: 1.8,
                    height: 2,
                    id: 'input_boolean.open_front_gate',
                    icons: {
                       on: 'mdi-gate-arrow-right',
                       off: 'mdi-gate'
                    },
                    states: {
                       on: "Open",
                       off: "Close"
                    }
                 },
                  {
                     position: [0, 2],
                     width: 1.8,
                     id: 'media_player.front_garden',
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
                     width: 1.8,
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
                  }
               ]
            },
            {
               title: '',
               width: 1.8,
               height: 3,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     title: 'Playroom',
                     type: TYPES.SCRIPT,
                     id: 'script.playroom_off',
                     width: 1.8,
                     height: 2,
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
                  },
                 {
                    position: [0, 2],
                    title: 'Front Garden',
                    width: 0.9,
                    id: 'switch.frontyard',
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
                 // {
                 //    position: [1, 2],
                 //    title: 'Side Passage',
                 //    id: 'switch.side',
                 //    type: TYPES.LIGHT,
                 //    states: {
                 //       on: "On",
                 //       off: "Off"
                 //    },
                 //    icons: {
                 //       on: "mdi-lightbulb-on",
                 //       off: "mdi-lightbulb",
                 //    },
                 // },
                 {
                    position: [0.9, 2],
                    title: "Girl's Room",
                    width: 0.9,
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
                    position: [0, 3],
                    title: 'Front Porch',
                    width: 0.9,
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
                    position: [0.9, 3],
                    title: 'Hall',
                    width: 0.9,
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
               ]
            },
            {
               title: '',
               width: 4,
               height: 3,
               row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                 {
                    position: [0, 0],
                    id: 'camera.front_gate_live',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 2,
                    height: 2,
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
                    position: [0, 2],
                    id: 'camera.front_gate_last_ring',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 2,
                    height: 2,
                    state: false,
                    refresh: 1500,  // can be number in milliseconds
                    refresh: function () {  // can also be a function
                       return 3000 + Math.random() * 1000
                    }
                 },
                 {
                    position: [2, 2],
                    id: 'camera.frontcam',
                    type: TYPES.CAMERA,
                    bgSize: 'cover',
                    width: 2,
                    height: 2,
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
                    position: [2, 0],
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
               ]
            },
///// end of section
         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
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
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },
         ]
      }
   ],
}
