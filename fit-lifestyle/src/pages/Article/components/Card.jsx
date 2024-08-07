import { Link } from "react-router-dom";
import Posts from "../../../Data/Posts";

export default function Card() {
  return (
    <div className="">
      <div className="mx-auto">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-2  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <img
                src={post.postImageUrl}
                alt={post.title}
                className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <Link
                  to={`/category/${post.category.slug}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={`/article/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link to={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
