import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BottomBar = ()=> {
    return (
        <div className = "md:hidden flex bg-slate-50 bottom-0  fixed h-16 w-[100%] items-center justify-between pl-5 pr-5">
            <div>
            <IoIosArrowBack size={40} />
            </div>
        <div className="">
        <audio  className="sm:w-48 w-72 bg-transparent appearance-none outline-none border-none" controls>
                <source  src="https://firebasestorage.googleapis.com/v0/b/dha-anywaa-bible-47f57.appspot.com/o/dha_anywaa_bible_audios%2FNew%20testement%2F1%20thimot%2F15_1-timothy_01.mp3?alt=media&token=cb038f9f-bdd3-4139-8811-0f90c388d048" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
            <div>
            <IoIosArrowForward size={40} />
            </div>
            
            
        </div>
    )
}

export default BottomBar;