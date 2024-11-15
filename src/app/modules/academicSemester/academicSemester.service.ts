import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";



const createAcademicSemester = async (payload: TAcademicSemester) => {

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester Code")
    }


    const result = await AcademicSemester.create(payload);
    return result;
};


export const AcademicSemesterServices = {
    createAcademicSemester
}