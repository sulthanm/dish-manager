// routes/dishes.js
import { Router } from 'express';
import { getDishes, toggleDishPublished } from '../controllers/dishController.js';

const router = Router();

router.get('/', getDishes);
router.patch('/:id/toggle', toggleDishPublished);

export default router;
