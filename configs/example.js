/*
 *
 * Example (Telestai)
 *
 */

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.settings = {};

// Banning Configuration
config.settings.banning = {};
config.settings.banning.banLength = 600000; // ms;
config.settings.banning.checkThreshold = 500;
config.settings.banning.invalidPercent = 50;
config.settings.banning.purgeInterval = 300000; // ms;

// Timeout Configuration
config.settings.timeout = {};
config.settings.timeout.connection = 600000; // ms
config.settings.timeout.rebroadcast = 60000; // ms

// Interval Configuration
config.settings.interval = {};
config.settings.interval.blocks = 1000; // ms

// Shared Configuration
////////////////////////////////////////////////////////////////////////////////

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = 3002;
ports1.enabled = true;
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = .5;
ports1.difficulty.minimum = .1;
ports1.difficulty.maximum = 5;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Telestai';
config.primary.coin.symbol = 'TLS';
config.primary.coin.algorithm = 'meraki';

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 8766;
daemons1.username = '';
daemons1.password = '';
config.primary.daemons.push(daemons1);

// Recipients Configuration
config.primary.recipients = [];

// ZMQ Configuration
config.primary.zmq = {};
config.primary.zmq.enabled = false;
config.primary.zmq.host = '127.0.0.1';
config.primary.zmq.port = 29000;

// Export Configuration
module.exports = config;
