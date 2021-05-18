import Head from 'next/head'
import Front from '../components/Front'
import Sidebar from '../components/Sidebar'
import dynamic from 'next/dynamic';
import SidebarRight from '../components/SidebarRight';


const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

export default function Home () {
  return (
    <div>
      <Head>
        <title>Home | Fit52</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
          />
      </Head>
      <div className="flex flex-wrap overflow-hidden">
      
      <div className=" w-full overflow-hidden">
      <DynamicComponentWithNoSSR />
      <Front />
      </div>
      </div>
    </div>
  )
}

