/**
 * AsteroidInitialize -- Initializes Asteroid from 'asteroidconfig'.
 */

'use strict';

import Asteroid         from 'asteroid-browser';
import asteroidconfig   from 'asteroidconfig';

if (typeof asteroidconfig !== object || typeof asteroidconfig.host !== string)
{
   throw new Error("AsteroidInitialize - `asteroidconfig` is not an object hash or doesn't contain a `host` entry.");
}

/**
 * Export an instance of Asteroid.
 */
export default new Asteroid(asteroidconfig.host, asteroidconfig.ssl || false);