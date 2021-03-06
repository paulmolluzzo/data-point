const createBaseEntity = require('../base-entity').create
const { validateModifiers } = require('../validate-modifiers')

/**
 * @class
 */
function EntityEntry () {}

module.exports.EntityEntry = EntityEntry

/**
 * Creates new Entity Object
 * @param  {Object} spec - spec
 * @param {string} id - Entity id
 * @return {EntityEntry} Entity Object
 */
function create (spec, id) {
  validateModifiers(id, spec, [])
  const entity = createBaseEntity(EntityEntry, spec, id)
  return Object.freeze(entity)
}

module.exports.create = create
