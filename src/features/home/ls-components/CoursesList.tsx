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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
              <div className="header fr-aic g-10" style={{backgroundImage: `url(${course.imageUrl})`}}>
                <b className="badge">{course.courseType}</b>
              </div>
              <div className="body">
                <div className="body-top">
                  <div className="fr-aic g-10">
                      <BookmarksIcon />
                    <h4>{course.courseName}</h4>
                  </div>
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
                <div className="fc g-10 curriculum-points">
                  {course?.curriculumPoints?.map((point, index) => {
                    return (
                      <div className="fr-aic g-10 point" key={index}>
                        <CheckCircleOutlineOutlinedIcon />
                        <span>{point}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="footer fr-aic jc-sb g-10">
                <button className="btn-apply" onClick={toggleApplyNowModal}>Get a callback</button>
                <button className="btn-apply fr-aic jc-c g-10" onClick={toggleApplyNowModal}>
                  <span>Learn More</span>
                  <ChevronRightIcon style={{fontSize: "16px"}}/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
