/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    sendResponse(res, {
      success: true,
      message: 'Academic Semester created successfully!',
      data: result,
      statusCode: httpStatus.OK,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
