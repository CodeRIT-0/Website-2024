import FacultyCard from "@/src/Card/FacultyCard"
import Card from "@/src/Card/Card"
import Faculty from "./Faculty"
import Alumni from "./Alumni"
import Seniors from "./Seniors"
import Juniors from './Juniors'

export default function Team(){
    return(
        <div className="mt-[72px] bg-gray-300">
            <div className="mx-4 p-4 ">
                <h1 className="text-center text-4xl p-4 "> <span className="bg-yellow-500 rounded-md shadow-2xl px-5">The Faculty</span> </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center ">
                    {
                        Faculty.map((ele,index)=>{
                            return(
                                <FacultyCard person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" mx-4 p-4">
                <h1 className="text-center text-4xl p-4 drop-shadow-xl ">
                    <span className="bg-yellow-500 rounded-md shadow-2xl px-5">  Alumni</span> </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {
                        Alumni.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" mx-4 p-4">
                <h1 className="text-center text-4xl p-4 drop-shadow-xl ">
                    <span className="bg-yellow-500 rounded-md shadow-2xl px-5">  Senior Core</span> </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {
                        Seniors.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" mx-4 p-4">
                <h1 className="text-center text-4xl p-4 "> <span className="rounded-md bg-yellow-500 shadow-2xl px-5"> 
                 Junior Core</span>
               </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                    {
                        Juniors.map((ele,index)=>{
                            return(
                                <Card person={ele} key={index}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}