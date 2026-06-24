import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model('Note', noteSchema);
