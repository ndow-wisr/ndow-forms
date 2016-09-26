models = require('./models');

encId = Math.floor(Math.random() * 1000);

var animal = {
    source: 'test',
    species_id: 200,
    user_id: 1,
    sex: 'male',
    field_id: encId
};
var encounter = {
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
};
var mark = {
    mark_type: 'ear tag',
    mark_id: encId,
    mark_color: 'green'
};
var abundance = {
    n_male: 1,
    n_female: 2,
    n_unk_sex: 3
};

//encounter.Abundance = abundance;
animal.Encounters = [ encounter ];
animal.Marks = [ mark ];

models.Animal.create(animal, {
    include: [
        {
            model: models.Encounter,
            include: [ {model: models.Abundance} ]
        },
        {model: models.Mark}
    ]
});


// models.Animal
//     .findOrCreate({where: {field_id: animal.field_id}, defaults: animal})
//     .spread(function(animal, created){
//         console.log(animal.get({
//             plain: true
//         }))
//         console.log(created);
//     })
