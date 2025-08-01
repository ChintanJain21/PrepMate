import {   Sparkles } from "lucide-react"
import { Container } from "../components/Container"
import { Link } from "react-router"
import { Button } from "../components/ui/button"



const HomePage = () => {
  return (
    <div className=" flex-col w-full pb-24">
      <Container>
         <div className="my-4 md:my-6">
      <h2 className="text-3xl text-center md:text-left md:text-6xl">
        <span className="text-gray-900 font-extrabold md:text-8xl">
          PrepMate
        </span>
        <span className="text-gray-600 font-extrabold">
          - Your ultimate companion for
        </span>
        <br />
        <span className="text-gray-700">mastering </span>
        <span className="text-blue-600">interview success</span>
        <span className="text-gray-700"> and </span>
        <span className="text-green-600">career growth</span>
      </h2>

      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Transform your interview performance with
        <span className="text-blue-600 font-medium"> intelligent AI feedback</span>.
        Master the art of interviewing through personalized practice, expert insights, and proven strategies that land you your dream job.
      </p>
    </div>
     <div className="w-full mt-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 h-[420px] md:h-[480px] shadow-xl overflow-hidden relative group">
      
      <img
        src="hero.jpg"
        alt="PrepMate Interview Practice Platform"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
 
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      

      
      
      <div className="hidden md:block absolute w-80 lg:w-96 bottom-6 right-6 px-6 py-4 rounded-xl bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h3 className="text-gray-900 font-bold text-lg">Live AI Interview</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Experience realistic interview scenarios with instant AI feedback. Practice with confidence and master your responses before the real deal.
        </p>
        
      
        <div className="flex gap-3">
          <Link to={"/generate"}>
          <Button size={"sm"}>Practice Now
          <Sparkles className="ml-2 w-4 h-4" />
          </Button>
         
        </Link>
        </div>
        
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-200/50">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">95% Success Rate</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-medium">Real-time Feedback</span>
          </div>
        </div>
      </div>
      
      {/* Mobile overlay */}
      <div className="md:hidden absolute inset-x-4 bottom-4 px-4 py-3 rounded-xl bg-white/90 backdrop-blur-lg">
        <h3 className="text-gray-900 font-bold text-base mb-1">AI Interview Practice</h3>
        <p className="text-sm text-gray-600 mb-3">Master interviews with intelligent feedback</p>
        <a href="/generate" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
          Get Started
          <Sparkles className="w-4 h-4" />
        </a>
      </div>
    </div>
       
      </Container>
     <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="office.jpeg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
 
    </div>
  )
}

export default HomePage
