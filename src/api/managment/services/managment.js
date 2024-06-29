'use strict';

/**
 * managment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::managment.managment');
