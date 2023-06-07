import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;
