/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.services';

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
