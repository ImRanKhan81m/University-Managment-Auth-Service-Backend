import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validations';
import { ENUM_USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  auth(ENUM_USER_ROLES.ADMIN),
  AcademicFacultyController.createFaculty
);

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLES.ADMIN,
    ENUM_USER_ROLES.SUPER_ADMIN,
    ENUM_USER_ROLES.STUDENT,
    ENUM_USER_ROLES.FACULTY
  ),
  AcademicFacultyController.getSingleFaculty
);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  auth(
    ENUM_USER_ROLES.ADMIN,
    ENUM_USER_ROLES.SUPER_ADMIN,
    ENUM_USER_ROLES.FACULTY
  ),
  AcademicFacultyController.updateFaculty
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLES.ADMIN, ENUM_USER_ROLES.SUPER_ADMIN),
  AcademicFacultyController.deleteFaculty
);

router.get('/', AcademicFacultyController.getAllFaculties);

export const AcademicFacultyRoutes = router;
