# Home Assistant
## My Home Assistant configs

My Home Assistant configuration is Home Assistant Supervised on an Intel NUC i5 and a Raspberry Pi3B+. The NUC is the main HA and the Pi is a second, located in the Lounge room - a better location for the Zigbee network controller. The Lounge HA instance is connected to the main Home Assistant instance by Home Assistance Remote https://github.com/custom-components/remote_homeassistant

Intergrations you'll find in my config files:

House Mode: Day, Evening, Bedtime, Night, Holiday
- basis for all time of day events
- set based on luminance or time or Sunset
- Holiday mode for reduced functionality when away (with appearance of still being at home)

- Presence Detection/Device tracking - currently limited
- BMW ConnectedDrive
- Lights based on motion sensors
- Gate opening based on RFID
- Select lights based on RFID

Z-wave:

- HASS OpenZave intergation (default)
  lights
- temp/light/movement sensors
- switches

Lights:

- Light control, on/off, dimming
- Automated via House Mode
- Automated via luminance
- Automated via Doorbell
- Automated via time

Watering:

- 3 segement with adjustable timers
- HW: ESPhome with ESP8266, relays and solenoids

Solar Power:

- SolarEdge integration
  - inverter power generation data (via Rest Sensor)
  - daily power generated

- emonpi with emoncms integration:
  - several sensors covering Solar Prod, House and Grid usage
  - onewire temp sensor

Dyson:

fan, controls
temp, air quality and humidity sensors
Sonos:

Media Player control
Doorbell sound
Media Players:

Sonos
Plex
Samsung tv
Chromecast
Google maps:

travel time to home
travel time from home to multiple locations
Google Calendar: - next family appointment - bin night, changing icon

Uber:

UberX pickup time
UberX travel times
UberX estimated cost
BMW ConnectedDrive:

Odometer/fuel data
Car location trackers
Secure Status
Windows Status
Doors Status
NSW Transport:

Live Bus times
MQTT:

OwnTracks
Device testing
IT Device Sensors:

Qnap NAS
APC ups
HASS server HW and version monitoring
Speedtest - internet speed
Weather/Sun:

DarkSky weather
Sun tracking
Cameras:

Hikvision (MPEG) video feeds and motion detection
Doorbird (Live, Cloud recent images)
Doorbird (multi-function video intercom):

Video feed
Last visitors images
IR light control
Magnetic gate latch open (via intergrated relay)
Doorbell played via Sonos based on time of day
Other features:

iOS Frontend theme changes based on time of day
Actionable notifications to iOS Frontend
Logbook entries
File size (checking HASS DB)
Web Scrape (checking for latest HASS version)
Templates for data conversion, data formatting and conditions
Roadmap:

MQTT - micro-controllers
Front gate sensors
Window control
Roller blinds control
Extendable sun shade control
Automated weather based watering control
