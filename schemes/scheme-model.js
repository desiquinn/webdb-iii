const db = require('../db-config.js')

module.exports= {
    find,
    findById, 
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({id})
        .first()
}

function findSteps(id) {
    return db('steps')
        .select([
            'steps.id',
            'schemes.scheme_name',
            'steps.step_number',
            'steps.instructions',
        ])
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .orderBy('steps.step_number')
        .where({'scheme_id': id})
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(([id]) => findById(id));
}

function update(scheme, id) {
    return db('schemes')
        .where({id})
        .update(scheme)
        .then((count) => {
            if(count) {
             return findById(id)
            }
        });
}

function remove(id) {
    return db('schemes')
        .where({id})
        .del()
}