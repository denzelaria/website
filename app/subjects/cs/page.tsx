'use client'
import SubjectSegment from "../_components/SubjectSegment"

const cs = () => {
  return (
    <div className="flex justify-center align-center flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold sm:text-5xl not-sm:text-3xl text-center">IGCSE <span className="text-blue-400">Computer Science</span></h1>
        <h3 className="text-xl">0478</h3>
        <p className="text-gray-600 my-3">Last updated : 3 days ago</p>
      </div>
      <div className="flex flex-col justify-center items-center w-auto">
        <div className="grid md:grid-cols-2 not-md:grid-cols-1 gap-10 w-full not-lg:flex-col lg:flex-row justify-center items-start my-10">
          <SubjectSegment title="Paper 1" icon="/assets/test-icon.png" notes={["Diagrams - elysianmyst", "Topical notes - elysianmyst", "Topical notes - ashy & pizza"]}/>
          <SubjectSegment title="Paper 2" icon="/assets/test-icon.png" notes={["Basic programming syntax - rud & puppy"]}/>
        </div>
        <div className="flex flex-col w-full bg-zinc-900 justify-center items-center rounded border border-zinc-700">
          <h3 className="py-5 text-xl">Our resource bank</h3>
          <iframe className="bg-zinc-900 w-full h-75" src="https://drive.google.com/embeddedfolderview?id=1UQ8C-h2XebbrPEPxRG2NnsaavCi1EFLY#list"></iframe>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-center text-2xl my-10">Other recommended resources</h2>
          <div className="grid grid-cols-2 gap-4 w-full justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-xl text-blue-400">Flashcards</h3>
              <ul className="list-disc ml-4">
                <li><a href="">abc</a></li>
                <li><a href="">abc</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-blue-400">Flashcards</h3>
              <ul className="list-disc ml-4">
                <li><a href="">abc</a></li>
                <li><a href="">abc</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-blue-400">Flashcards</h3>
              <ul className="list-disc ml-4">
                <li><a href="">abc</a></li>
                <li><a href="">abc</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl text-blue-400">Flashcards</h3>
              <ul className="list-disc ml-4">
                <li><a href="">abc</a></li>
                <li><a href="">abc</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cs