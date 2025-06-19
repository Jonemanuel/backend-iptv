import express from 'express';
import { proxyHandler } from '../controllers/proxy.controller.js';

const router = express.Router();
router.get('/', proxyHandler);

export default router;
