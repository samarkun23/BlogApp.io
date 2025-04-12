import { blogData } from "../assets/assets";
import BlogCard from "./BlogCard";

const LatestBlogs = () => {
    return (
        <div>
            <h1 className="text-3xl my-3 font-bold text-center sm:text-start">Latest Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
                {blogData.slice(-4).reverse().map((blog, index) => (  //its show only 4 blog like -4 .reverse
                    <BlogCard
                        key={index}
                        id={blog.id}
                        title={blog.title}
                        image={blog.image}
                        category={blog.category}
                        author_name={blog.author.name}
                        author_image={blog.author.image}
                        date={blog.date}
                    />
                 ))
                }
            </div>
        </div>
    )
}

export default LatestBlogs;