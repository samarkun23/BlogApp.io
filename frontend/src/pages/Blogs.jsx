import Hero from '../components/Hero'
import { blogData } from '../assets/assets';
import BlogCard from '../components/BlogCard';


const Blogs = () => {
    return (
        <div>
            <Hero />
            <h1 className='text-3xl text-center font-bold my-6'>All Blogs</h1>
            <p className='text-base px-3 sm:text-lg leading-6 max-w-2xl mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ratione doloribus, enim animi commodi illum ipsam impedit quas blanditiis laborum, vitae perferendis ipsum? Ratione reprehenderit magnam officiis! Magni, dicta saepe.
            Accusantium rem omnis sunt? Voluptas, quidem voluptate voluptatum tenetur illo eaque fugit natus, corporis non quia deleniti praesentium facilis odit minus totam mollitia itaque reiciendis eum recusandae similique accusamus sit!</p>
            <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
                {blogData.map((blog, index) => (
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

export default Blogs;