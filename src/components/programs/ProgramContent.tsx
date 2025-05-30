
import { ReactNode } from "react";
import HeroProgram from "./HeroProgram";
import ProgramIntroduction from "./ProgramIntroduction";
import ProgramSkills from "./ProgramSkills";
import ProgramCurriculum from "./ProgramCurriculum";
import FacultyAndInternship from "./FacultyAndInternship";
import ProgramSeminars from "./ProgramSeminars";
import CareerAndEducation from "./CareerAndEducation";
import AdmissionRequirements from "./AdmissionRequirements";
import CallToAction from "./CallToAction";
import { ProgramContentProps } from "./types/programTypes";

const ProgramContent = ({
  // Hero
  title,
  subtitle,
  description,
  imageUrl,
  
  // Introduction
  introductionParagraphs,
  
  // Skills
  skills,
  
  // Curriculum
  curriculum,
  
  // Faculty and Internship
  facultyText,
  internshipText,
  
  // Seminars
  seminars,
  seminarsDescription,
  
  // Career and Education
  careers,
  educationDescription,
  educationOptions,
  
  // Admission Requirements
  licence1Requirements,
  licence2Text,
  licence3Text,
  
  // Call to Action
  ctaTitle,
  ctaDescription,
}: ProgramContentProps) => {
  return (
    <div className="min-h-screen pt-20">
      <HeroProgram
        title={title}
        subtitle={subtitle}
        description={description}
        imageUrl={imageUrl}
      />
      
      <div className="container mx-auto px-4">
        <ProgramIntroduction paragraphs={introductionParagraphs} />
        
        <ProgramSkills skills={skills} />
        
        <ProgramCurriculum 
          year1={curriculum.year1}
          year2={curriculum.year2}
          year3={curriculum.year3}
        />
        
        <FacultyAndInternship
          facultyText={facultyText}
          internshipText={internshipText}
        />
        
        <ProgramSeminars 
          seminars={seminars}
          description={seminarsDescription}
        />
        
        <CareerAndEducation
          careers={careers}
          educationDescription={educationDescription}
          educationOptions={educationOptions}
        />
        
        <AdmissionRequirements
          licence1Requirements={licence1Requirements}
          licence2Text={licence2Text}
          licence3Text={licence3Text}
        />
        
        <CallToAction
          title={ctaTitle}
          description={ctaDescription}
        />
      </div>
    </div>
  );
};

export default ProgramContent;
