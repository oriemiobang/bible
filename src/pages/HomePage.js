
import { useEffect, useState } from "react";
import Header from "../components/Header"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const HomePage  = ()=> {
  

  const [bibleData, setBibleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myNumber, setMyNumber] = useState(0)
  const [bookSelected, setBookSelected] = useState("")
  const [selectedVersion, setSelectedVersion] = useState("")
  const handleAdd = () => {
    if (myNumber < bibleData?.text.length - 1) {
      setMyNumber(myNumber + 1); // Go to next chapter
    }
  };

  // Decrement the chapter number to go to the previous chapter
  const handleSub = () => {
    if (myNumber > 0) {
      setMyNumber(myNumber - 1); // Go to previous chapter
    }
  };

  useEffect(() => {
    // Replace these with actual values for testement, book, and version
    const testement = 'NT';
    const book = '1CO';
    const version = 'ERV';

    // Fetch data from the backend API
    fetch(`/api/eng/${testement}/${book}/${version}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching Bible data');
            }
            return response.json();
        })
        .then(data => {
            setBibleData(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
}, []);

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

const handleSelectBook= (e)=> {
  console.log(e.target.value)
  setBookSelected(e.target.value)

}
const handleSelectedVersion= (e)=> {
  console.log(e.target.value)
  setSelectedVersion(e.target.value)

}

  



    return (
<div className=" lg:w-[70%] md:w-[80%] flex flex-col  items-center mx-6">
    <div className="fixed  bg-white w-full md:w-[40%] ">
    <Header/>
<div className="flex w-full md:w-auto md:flex-row justify-between gap-2 items-center p-2 bg-gray-100 rounded-lg shadow-md">
  <select onChange={handleSelectBook} value={bookSelected} className="w-full md:w-56 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    <option value="genesis">Genesis</option>
    <option value="exodus">Exodus</option>
    <option value="leviticus">Leviticus</option>
    <option value="deuteronomy">Deuteronomy</option>
    <option value="joshua">Joshua</option>
    <option value="judges">Judges</option>
    <option value="ruth">Ruth</option>
  </select>
  
  <select value={selectedVersion} onChange={handleSelectedVersion} className="w-full md:w-56 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
    <option value="ERV">Easy-to-read version</option>
    <option value="KJV">King James Version</option>
    <option value="ESV">English standart Version</option>
    <option value="ANY">Dha Anywaa</option>
    <option value="AMH">Amharic</option>
    <option value="WEB">World English Bible</option>
    <option value="AMP">Amplified Version</option>
  </select>
</div>

<div className="flex justify-center pt-2">
  <audio className="mt-5 hidden md:block" controls>
    <source  src="https://firebasestorage.googleapis.com/v0/b/dha-anywaa-bible-47f57.appspot.com/o/dha_anywaa_bible_audios%2FNew%20testement%2F1%20thimot%2F15_1-timothy_01.mp3?alt=media&token=cb038f9f-bdd3-4139-8811-0f90c388d048" type="audio/mpeg"/>
    Your browser does not support the audio element.

  </audio>
</div>
    </div>





   
 <div onClick={handleSub} className="fixed bg-slate-100 p-2 rounded-full hidden md:block lg:left-56 md:left-32  left-56 top-1/2 transform -translate-y-1/2">
  <IoIosArrowBack size={40} />
</div>

<div className= "md:pt-60 pt-36  md:w-[60%] md:text-lg lg:w-[55%] sm:w-[70%] mt-5 tracking-wide leading-10  p-5 shadow-sm">

          {
  bibleData?.text[myNumber]?.text?.map((section, index) => {
  
    return (
      <div>
         {(index ===0 && bibleData?.text[myNumber].name )&&   <h2 className="text-3xl font-bold ">{bibleData?.text[myNumber].name}</h2>}
            {index ===0 && <h2 className="font-semibold text-start py-2">{bibleData?.text[myNumber].title}</h2>}
            <div className="flex gap-2 items-start" key={section.id}>

{/* Display section ID and section text */}
<p className="text-gray-500">{section.ID}</p> 
<p>{section.text}</p>
</div>
      </div>
   
    );
  })
}


{/* list.text[0].text.map((book)=> {
    console.log(book.text)
}) */}



</div>
<div onClick={handleAdd} className="fixed bg-slate-100 p-2 rounded-full hidden md:block lg:right-56 md:right-32 top-1/2 transform -translate-y-1/2">
  <IoIosArrowForward size={40} />
</div>
</div>


            
               
        
    )
}

export default HomePage