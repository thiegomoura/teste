const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcryptjs');

const DwellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nested: {
        firstName: {type: String},
        lastName: {type: String}
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    cpf: {
        type: String
    },
    telephone: {
        type: Intl
    },
    photoURL: {
        type: String
    },
    debit: [{
        _objectid: String,
        monthRef: Date,
        description: String,
        value: mongoose.Decimal128,
    }],
    room: {
        _objectid: String,
        description:  String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

DwellerSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

DwellerSchema.plugin(mongoosePaginate);

mongoose.model('Dweller', DwellerSchema);