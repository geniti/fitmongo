import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function test ({ output }) {
  console.log(output);
  return (
    <div>
      <Head>
        <title>Geniti</title>
        <link rel="Icon" href="/favicon.ico"></link>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>

      <div className="container mx-auto">
        <div className="flex">
          <div className="row w-full text-center my-4">
            <h1 className="text-4xl font-bold md-5">NEXTBNB</h1>
          </div>
        </div>
        
        <div className="flex flex-row flex-wrap">
          {output && output.map(output => (
            <div className="">
              <img src={output.logo} />
              <div>
                <div>{output.adres} (up to {output.Naam} quests)</div>
                <p>{output.Naam}</p>
                <p>{output.Naam}</p>
              </div>
              <div>
                <span>€ {output.Informatie}</span>/night
              </div>
              <button href="">book</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("output").find({}).limit(20).toArray();
  
  const output = JSON.parse(JSON.stringify(data));

  const filtered = output.map(output => {
    
    return {
      _id: output._id,
      Naam: output.Naam,
      adres: output.adres,
      Informatie: output.Informatie,
      logo: output.logo
    }
  })

  return {
    props: { output: filtered },
  }
}
