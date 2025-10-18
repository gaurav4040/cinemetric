import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favorite = () => {
   return dummyShowsData.length>0 ?(
    <div className="w-full relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px44 overflow-hidden min-h-[80vh]">
      <BlurCircle /><BlurCircle /><BlurCircle />
      <BlurCircle /><BlurCircle /><BlurCircle />
      <BlurCircle /><BlurCircle /><BlurCircle />
      <h1 className="text-lg font-medium my-4">Your Favorite Shows</h1>
      <div className="flex justify-center flex-wrap max-sm:justify-center gap-4">
        {dummyShowsData.map((movie)=>(
          <MovieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  ):(
    <div>
      <h1 className="text-3xl font-bold text-center">No Movies Available</h1>
    </div>
  )
}

export default Favorite