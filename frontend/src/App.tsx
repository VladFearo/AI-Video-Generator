function App() {

  return (
    <>
    <main className="max-w-3xl mx-auto flex px-5">
      <div className="py-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold uppercase mb-4">
          <span className="text-6xl">
            URL to Video
          </span><br />with the power of AI
        </h1>

        <form className=" grid gap-2">
          <input
          className="bg-transparent border-2 rounded-full text-white  px-4 py-2 grow" 
          type="url" placeholder="https://..."/>
          <button
          className="bg-emerald-500 text-white px-4 py-2 rounded-full" 
          type="submit">
            Create&nbsp;Video
            </button>  
        </form>  
      </div>
      <div className="p-8">
        <div className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-8">
          video here
        </div>
      </div>
    </main>
      
      
      
    </>
  )
}

export default App
