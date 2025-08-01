import { Plus } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router"
import { Separator } from "@radix-ui/react-separator"
import { Headings } from "../components/Headings"


const Dashboard = () => {
  return (
    <>
    <div className="flex w-full items-center justify-between">
        {/* headings */}
        <Headings
          title="Dashboard"
          description="Create and start you AI Mock interview"
        />
        <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus /> Add New
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
    </>
    
  )
}

export default Dashboard
