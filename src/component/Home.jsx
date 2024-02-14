import Images from './Images'

const Home = () => {
  // fetch api
  return (
    <>
      <div className="fixed h-[40px] w-[100%] top-0 left-0 bg-zinc-700 flex flex-row items-center justify-center text-center gap-8">
        <input type="text" placeholder="search something..." />
        <button className="w-[150px] h-[30px] rounded-md bg-zinc-400 hover:bg-zinc-500 text-white active:bg-zinc-600 ">
          submit
        </button>
      </div>
      <div>
        <Images />
      </div>
    </>
  )
}

export default Home
