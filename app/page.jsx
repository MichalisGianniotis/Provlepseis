import {MatchList} from "@/components/matches-list"
import { Button } from "@/components/ui/button"

export default async function Home() {
  // const movies = await getMovies()

  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="text-center">
        <Button className="mx-6 px-6">Συχνές Ερωτήσεις</Button>
        <Button className="mx-6 px-6 ">Dark Mode</Button>
      </div> */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* <article className="text-center bg-blue-900 text-white p-4">
                <h2 className="p-4">ΠΡΟΒΛΕΨΕΙΣ</h2>
                <p>Οποιαδήποτε πρόβλεψη είναι συμφώνα με τα στατιστικά και την προσωπική μου γνώμη.</p>
                <div className="leading-9 text-red-600">
                  <strong>ΚΙΝΔΥΝΟΣ ΑΠΩΛΕΙΑΣ ΠΕΡΙΟΥΣΙΑΣ. </strong>
                  <strong>ΠΑΙΞΕ ΥΠΕΥΘΥΝΑ</strong>
                </div>
        </article> */}
        {/* <h2 className="text-3xl font-bold mb-6 mt-6 text-center">Featured Matches</h2> */}
        <MatchList />
      </main>
    </div>
  )
}
