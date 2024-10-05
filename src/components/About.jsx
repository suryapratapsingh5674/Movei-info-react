import { Link, useNavigate } from "react-router-dom"

function About() {
  const navigate = useNavigate();

    document.title = "Movie Info | About"

  return (
    <div className="w-full h-screen text-zinc-400 px-10">
      <h1 className="text-2xl mb-2 mt-4 font-bold"><i onClick={() => navigate(-1)} className="hover:text-[#6556CD] text-2xl mr-3 cursor-pointer text-zinc-400 ri-arrow-left-line"></i> ABOUT</h1>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Welcome to Movie info by surya</h1>
        <h2 className="text-lg w-[80vw] font-medium">Your ultimate destination for all things movies and TV series.</h2>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Our Mission</h1>
        <h2 className="text-lg w-[80vw] font-medium">At Movie info by surya, we're passionate about providing an engaging and informative platform for film enthusiasts and binge-watchers alike. Our goal is to deliver comprehensive information, engaging features, and exclusive content that enhances your entertainment experience.</h2>
        <h1 className="text-2xl mb-2 mt-4 font-bold">What We Offer</h1>
        <h3 className="text-sm font-medium">.Trending Movies and TV Series: Stay up-to-date with the latest releases and popular titles.</h3>
        <h3 className="text-sm font-medium">.Trailers and Teasers: Catch a glimpse of upcoming and current movies and TV series.</h3>
        <h3 className="text-sm font-medium">.In-Depth Information: Dive into detailed descriptions, cast lists, ratings, and reviews.</h3>
        <h3 className="text-sm font-medium">.Personalized Recommendations: Discover new titles tailored to your interests.</h3>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Why Choose Us?</h1>
        <h3 className="text-sm font-medium">.User-Friendly Interface: Effortlessly navigate and explore our vast library.</h3>
        <h3 className="text-sm font-medium">.Regular Updates: Stay current with the latest news, releases, and trends.</h3>
        <h3 className="text-sm font-medium">.Community Engagement: Share thoughts, reviews, and recommendations with fellow enthusiasts.</h3>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Social Media</h1>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Stay connected:</h1>
        <h2 className="text-lg w-[80vw] font-medium">Twitter: <Link target="_blank" to="https://x.com/suryat6574" className="text-blue-400">https://x.com/suryat6574</Link></h2>
        <h2 className="text-lg w-[80vw] font-medium">Facebook: <Link target="_blank" to="https://www.instagram.com/suryat6574/" className="text-blue-400">https://www.instagram.com/suryat6574/</Link></h2>
        <h2 className="text-lg w-[80vw] font-medium">Github: <Link target="_blank" to="https://github.com/suryapratapsingh5674" className="text-blue-400">https://github.com/suryapratapsingh5674</Link></h2>
        <h1 className="text-2xl mb-2 mt-4 font-bold">Disclaimer</h1>
        <h2 className="text-lg w-[80vw] font-normal">Movie info by surya is an informational platform and does not host or distribute copyrighted content.Thank you for visiting Movie info. Happy watching!</h2>
    </div>
  )
}

export default About