import noteModel from '../models/Note.mjs'

class NoteService{
    async getAllNotes(){
        try{
            const notes = noteModel.find();
            return notes;
        } catch (e) {
            console.error("error message: ", e);
        }
    }

    async createNote(noteData){
        try{
            const note = noteModel.create(noteData);
            return note;
        } catch (e) {
            console.error("error message: ", e);
        }
    }
}
