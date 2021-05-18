import posts from "../_posts";
import Link from "next/link"
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FaceIcon from '@material-ui/icons/Face';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';

// This post argument is passed from getStaticProps
const BlogPost = ({ post }) => (
  <article className="">
    <div className="relative pb-5/6">
      <img className="inset-0 h-55 md:h-screen w-full rounded-lg shadow-md object-cover" src={post.imageURL} alt="" />
    </div>
    <div className="relative px-4 -mt-16">
      <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
        <div className="grid ">
        <div className="flex items-baseline">
          <span className="inline-block px-2 py-1 leading-none bg-orange-400 text-white rounded-full font-semibold uppercase tracking-wide text-xs">Café</span>
          <span className="inline-block px-2 py-1  text-orange-400 rounded-full font-semibold uppercase tracking-wide text-xs">Luxe</span>
          <span className="inline-block px-2 py-1  text-orange-400 rounded-full font-semibold uppercase tracking-wide text-xs">Squash</span>
          <span className="inline-block px-2 py-1 text-orange-400 rounded-full font-semibold uppercase tracking-wide text-xs">Pool</span>

        </div>
        <Link href={`sportschool/${post.slug}`}>
        <h4 className="mt-1 text-gray-900 font-semibold text-lg">{post.naam}</h4>
        </Link>
        <div className="mt-1">
          <span className="text-gray-900">€ {post.avprice}</span>
          <span className="ml-1 text-sm text-gray-600">/mnd</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <svg v-for="i in 5" className="h-4 w-4 fill-current" >
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
          </svg>
          <span className="ml-2">{post.description} </span>
        </div>
      </div>
      </div>
      </div>
      <div className="flex items-center justify-between p-10 md:p-20">
      <DriveEtaIcon />
      <EventAvailableIcon />
      <FaceIcon />
      <FilterDramaIcon />
      <FitnessCenterIcon />
      <GroupIcon />
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full p-4">
    <div class="w-full">
        
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="300"> 
        <h4 class="font-semibold mb-1 text-blue-600"> </h4>
                <div class="bg-black text-xs leading-none text-center text-white rounded" style={{width: '85%'}}>Beter dan goed</div>
        </div>
       
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="500">
        <h4 class="font-semibold mb-1 text-blue-600"></h4>
        <div class="bg-black text-xs leading-none  text-center text-white rounded" style={{width: '75%'}}>Ruim voldoende</div>
        </div>
        
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="700">
        <h4 class="font-semibold mb-1 text-blue-600"></h4>
        <div class="bg-black text-xs leading-none text-center text-white rounded" style={{width: '85%'}}>Beter dan goed</div>
        </div>
       
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="900">
        <h4 class="font-semibold mb-1 text-blue-600"></h4>
        <div class="bg-orange-400 text-s p-1 leading-none text-center text-blue-600 rounded" style={{width: '100%'}}>Kan niet beter</div>
        </div>
</div>
    </div>
  </article>
);
export default BlogPost;

export async function getStaticPaths() {
  return {
    // Map all the posts to objects with the slug in the params object
    // since we want all our pages to be accessible, the paths array
    // needs to contain a list of all the posts slugs
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      // Since our slug should be unique we can use
      // it to find the post with the matching slug,
      // this will be the post we need to render
      post: posts.find((post) => post.slug === params.slug),
    },
  };
}