import { ApiStatus, IError } from "../../network/network.types";

export interface ICourseItem {
  courseId: number;
  courseName: string;
  duration: number;
  description: string;
  imageUrl: string;
  courseType: string;
  price: number;
  discount: number;
  curriculumPoints: string[];
}

export interface ICoursesModel {
  apiStatus: ApiStatus;
  data?: ICourseItem[];
  error?: IError;
}

export interface IInstructorTestimonial {
  name: string;
  company: string;
  role: string;
  designation: string;
  college: string;
  degree: string;
  imageUrl: string;
  linkedinUrl: string;
  companyLogoUrl: string;
  description: string;
}

export interface IInstructorTestimonialResponse {
  result: IInstructorTestimonial;
}

export interface IInstructorTestimonialModel {
  apiStatus: ApiStatus;
  data?: IInstructorTestimonialResponse;
  error?: IError;
}
