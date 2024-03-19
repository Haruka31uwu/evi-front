import courseData from '/src/data/blogs.json'
export const getBlog = (id) => {
    return courseData.blogList.find(blog => blog.id == id)
}