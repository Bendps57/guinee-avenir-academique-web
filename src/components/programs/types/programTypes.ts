
export interface CourseItem {
  name: string;
  credits: number;
}

export interface CourseRow {
  course1: CourseItem;
  course2: CourseItem;
}

export interface YearData {
  description: string;
  teachingHours: number;
  personalWorkHours: number;
  courses: CourseRow[];
}

export interface ProgramCurriculumData {
  year1: YearData;
  year2: YearData;
  year3: YearData;
}

export interface ProgramContentProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  introductionParagraphs: string[];
  skills: string[];
  curriculum: ProgramCurriculumData;
  facultyText: string;
  internshipText: string;
  seminars: string[];
  seminarsDescription: string;
  careers: string[];
  educationDescription: string;
  educationOptions: string[];
  licence1Requirements: string[];
  licence2Text: string;
  licence3Text: string;
  ctaTitle: string;
  ctaDescription: string;
}
