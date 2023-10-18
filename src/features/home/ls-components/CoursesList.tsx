import { ObservableObject } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import React from "react";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { ICourseItem } from "../home-types";
import "../styles/course-list.scss";
import { applyNowModel } from "../apply-now-model";

interface Props {
  coursesList$: ObservableObject<ICourseItem[]>;
}

export const CoursesList: React.FC<Props> = observer(({ coursesList$ }) => {
  const coursesList = coursesList$?.get?.();

  const toggleApplyNowModal = () => {
    applyNowModel.status$.set(old => !old)
  }

  return (
    <section className="our-courses">
      <div className="section-title">Our Courses</div>
      <div className="courses">
        {coursesList?.map?.((course) => {
          return (
            <div className="course-item" key={course.courseId}>
              <div className="header fr-aic g-10">
                <b className="badge">{course.courseType}</b>
                <BookmarksIcon />
                <h4>{course.courseName}</h4>
              </div>
              <div className="body">
                <div className="body-top">
                  <div className="chips fr-aic">
                    <div className="chip fr-aic g-10">
                      <AlarmOnIcon />
                      <span>{`Duration: ${course.duration} Months`}</span>
                    </div>
                  </div>
                  <p>{course.description}</p>
                </div>
                <div className="fr-aic g-10 title">
                  <SchoolOutlinedIcon />
                  <b>Curriculum</b>
                </div>
                <div className="fc g-10">
                  {course?.curriculumPoints?.map((point, index) => {
                    return (
                      <div className="fr-aic g-10" key={index}>
                        <CheckCircleOutlineOutlinedIcon style={{color: 'green'}} />
                        <span>{point}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="footer">
                <button className="btn-apply" onClick={toggleApplyNowModal}>Apply Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
