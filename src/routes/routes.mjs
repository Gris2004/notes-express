import { Router } from 'express';
import UserService from '../services/UserService.mjs';
import NoteService from '../services/NoteService.mjs';

const router = Router();

//users
//create user
router.post('/user', async (req, res) => {
    try{
        console.log(req.body);
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json({
            message: 'cannot create a user',
            error: e.message
        });
    }
});

router.post('/login', async (req, res) => {
    try{
        const user = await UserService.checkUser(req.body);

        if(typeof user === 'string'){
            return res.status(401).json({
                message: user
            });
        }

        res.status(200).json({
            id: user.__id,
            name: user.name
        });

    } catch(e){
        res.status(500).json({
            message: 'login error',
            error: e.message
        });
    }
});

//notes
//get a note
router.get('/notes', async (req, res) => {
    try{
        const notes = await NoteService.getAllNotes();
        res.status(200).json(notes);
    } catch (e) {
        res.status(500).json({
            message: "cannot get notes",
            error: e.message
        });
    }
});

//create a note
router.post('/notes', async (req, res) => {
    try{
        const note = NoteService.createNote(req.body);
        res.status(200).json(note);
    } catch (e) {
        res.status(500).json({
            message: "cannot create note",
            error: e.message
        });
    }
});

export default router;
