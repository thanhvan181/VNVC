import express from 'express';
import { adminCheck, checkAuth } from '../middlewares/auth';
import { uploadFile, deleteFile } from '../controllers/upload'

const router = express.Router();

router.post('/upload', uploadFile);
router.delete('/upload/:fileName', deleteFile);
module.exports = router;