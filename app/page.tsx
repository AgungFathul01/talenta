import TalentListing from "@/components/talent-listing"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <TalentListing />
      </main>
    </>
  )
}
