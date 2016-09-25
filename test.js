models = require('./models');

td = Date.now();

animal = {
    source: 'test',
    species_id: 200,
    user_id: 1,
    sex: 'male',
    created_at: td,
    updated_at: td,
    field_id: '800'
};

encounter = {
    enc_date: '2016-09-09',
    status: 'alive',
    enc_method: 'capture',
    enc_reason: 'disease',
    reencounter: false,
    relocated: false,
    biologist: 'Mitchell Gritts',
    comments: 'comment, blan blah lorem ipsum',
    folder_url: 'www.www.www.',
    qaqc_flag: false,
    trusted: true,
    animal_id: 30,
    created_at: td,
    updated_at: td
};

mark = {
    mark_type: 'ear tag',
    mark_id: '1234',
    mark_color: 'green',
    created_at: td,
    updated_at: td
};

abundance = {
    n_male: 1,
    n_female: 2,
    n_unk_sex: 3
}

encounter.Abundance = abundance
animal.Encounter = [ encounter ]
animal.Mark = [ mark ]

console.log(JSON.stringify(animal, null, '\t'));

// models.Animal.create(animal);
// models.Animal.findOrCreate(animal)
models.Animal
    .findOrCreate({where: {field_id: animal.field_id}, defaults: animal})
    .spread(function(animal, created){
        console.log(animal.get({
            plain: true
        }))
        console.log(created);
    })
