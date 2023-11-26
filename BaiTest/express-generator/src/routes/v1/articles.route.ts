import express from 'express';
import articlesController from '../../controllers/articles.controller';

const router = express.Router();

router.get('/', articlesController.getAll);

router.get('/:id', articlesController.getItemById);

router.post('/', articlesController.createItem);


router.patch('/:id',articlesController.updateItem);


router.delete('/:id', articlesController.deleteItem);

export default router;
