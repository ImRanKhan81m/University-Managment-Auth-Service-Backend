/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicFilterableFields } from './academicSemester.constant';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse(res, {
      success: true,
      message: 'Academic Semester created successfully!',
      data: result,
      statusCode: httpStatus.OK,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semesters fetched successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getSemesterById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSemesterById(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester fetched successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSemesterById,
};
