/**
 * AsteroidInitialize -- Initializes Asteroid from 'asteroidconfig'.
 */

'use strict';

import Asteroid         from 'asteroid-browser';
import asteroidconfig   from 'asteroidconfig';

export default new Asteroid(asteroidconfig.host, asteroidconfig.ssl || false);