import courseData from '/src/data/courses.json'
import programData from '/src/data/programs.json'
export const getCourse = (id) => {
    return courseData.coursesList.find(course => course.id == id)
}
export const getProgram = (id) => {
    return programData.programsList.find(program => program.id == id)
}
export const getProgramCourses = (courseList) => {
   const courseListIds=courseList.map(course=>course.id)
    return courseData.coursesList.filter(course=>courseListIds.includes(course.id))
}
