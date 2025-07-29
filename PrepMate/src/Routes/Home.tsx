import { Sparkles } from "lucide-react"
import { Container } from "../components/Container"
import { Button } from "../components/ui/button"
import { Link } from "react-router"


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
    <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src= 'hero.jpg'
            alt=""
            className="w-full h-full object-cover"
          />

       

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>
            <Link to={"/generate"} className="w-full">
            <Button className="mt-3">
              Generate <Sparkles />
            </Button>
            </Link>
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
