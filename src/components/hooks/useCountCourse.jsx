import { useMemo } from "react";

export const useCountCourse = (courses) => {
  const totalCourses = useMemo(() => {
    return courses.length;
  }, [courses]);

  return { totalCourses };
};