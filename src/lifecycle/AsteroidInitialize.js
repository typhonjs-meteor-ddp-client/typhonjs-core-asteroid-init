/**
 * AsteroidInitialize -- Initializes Asteroid from 'asteroidconfig'.
 */

'use strict';

import Asteroid         from 'asteroid-browser';
import asteroidconfig   from 'asteroidconfig';

console.log("AndroidInitialize - Asteroid: " +Asteroid);
console.log("AndroidInitialize - asteroidconfig: " +JSON.stringify(asteroidconfig));

export default new Asteroid(asteroidconfig.host, asteroidconfig.ssl || false);