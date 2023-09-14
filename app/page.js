import Image from 'next/image'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import RecentWork from './Components/RecentWork/RecentWork'
import RecentCapture from './Components/RecentCapture/RecentCapture'

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Banner></Banner>
      <RecentWork></RecentWork>
      <RecentCapture></RecentCapture>
    </main>
  )
}
