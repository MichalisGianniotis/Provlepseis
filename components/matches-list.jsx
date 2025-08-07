// import Image from "next/image";
import { matches } from "../data/matches";


export function MatchList() {

    return (
        <div className="container mx-auto py-8">
            <div className="container1">
                {matches.map((match) => (
                <div key={match.id} className="relative group overflow-hidden  item">
                    <div className="aspect-[2/3] relative">
                    <div className="absolute inset-0">
                        {/* <div className="absolute bottom-0 left-0 right-0 p-4"> */}
                        <div className="border-b-2 py-6 mb-5 text-white">
                            <h2 className=" font-semibold  text-center px-4 item-h">{match.title1}</h2>
                            <h2 className=" font-semibold text-center px-4 item-h">{match.title2}</h2>
                        </div>
                        <div className="flex items-center justify-center item-d">
                            <div className="text-gray-300 info">
                                <p className="mt-0.5">{match.betType1}</p>
                                
                                   {/* <section className="inline ml-9">
                                        <Image
                                            src="/icons8-check-48.png"
                                            width={20}
                                            height={20}
                                            
                                        />
                                    </section>  */}
                                <h2 className="mt-0.5 text-center font-semibold text-white">{match.bet1}</h2>
                                <p className="mt-2">{match.betType2}</p>
                                <h2 className="mt-0.5 text-center font-semibold text-white">{match.bet2}</h2>
                                {/* <div className="bg-red-600 my-16">1</div> */}
                            </div>
                            {/* <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> */}
                            {/* <span className="ml-1 text-white">{movie.rating.toFixed(1)}</span> */}
                        </div>
                        <div className="text-white ods-pos w-4/6 bg-red-900 text-lg font-normal leading-8 rounded-md">{match.betOdds}</div>
                        {/* </div> */}
                    </div>
                    </div>
                    {/* from-black/70 to-transparent 
                    transition-opacity duration-300
                    group-hover:opacity-100
                    */}
                </div>
                ))}
            </div>
            </div>
    )
}

