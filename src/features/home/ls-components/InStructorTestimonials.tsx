import { ObservableObject } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import React from "react";
import { IInstructorTestimonial } from "../home-types";
import "../styles/instructor-testimonials.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
  data$: ObservableObject<IInstructorTestimonial[]>;
}

export const InStructorTestimonials: React.FC<Props> = observer(({ data$ }) => {
  const instructors = data$?.get?.();
  console.log({ instructors });

  return (
    <div className="instructor-testimonials-container">
      <div className="section-title">
        Our instructors are prepared to help you unleash your full potential.
      </div>
      <div className="instructor-cards fr-aic">
        {instructors?.map?.((instructor, index) => {
          return (
            <div className="instructor-card" key={index}>
              <div className="fr-aic jc-sb">
                <img className="profile-image" src={instructor.imageUrl} alt="instructor image" />
                <LinkedInIcon className="linkedin-icon"/>
              </div>
              <h3>{instructor.name}</h3>
              <p>
                {instructor.description}
              </p>
              <p>{instructor.college}</p>
              <div className="fr-aic jc-sb">
                <span>{instructor.designation}</span>
                <img src={instructor.companyLogoUrl} alt="Company Logo"  className="company-logo"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
