import Link from "next/link";
import Head from 'next/head'
import { connectToDatabase } from '../../util/mongodb'
import SearchFilter from "../../components/SearchFilter";
import SiteHeader from "../../components/SiteHeader";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FaceIcon from '@material-ui/icons/Face';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';

export default function test ({ output }) {
  console.log(output);
  return (
  <div >
    <div>
  <SiteHeader />
  </div>
  <div className="flex">
    <div>
      <SearchFilter />
    </div>
    <div className="flex-1">
  <ul className="grid md:grid-cols-3 md:p-4 md:m-4">
  {output && output.map(output => (
      <li key={output._id} className="p-4">
      <DriveEtaIcon />
      <EventAvailableIcon />
      <FaceIcon />
      <FilterDramaIcon />
      <FitnessCenterIcon />
      <GroupIcon />
    <div className="relative pb-5/6">
      <img className="inset-0 h-full w-full rounded-lg shadow-md object-cover" src={output.logo} alt="" />
    </div>
    <div className="relative px-4 -mt-16">
      <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
        <div className="grid ">
        <div className="flex items-baseline">
          <span className="inline-block px-2 py-1 leading-none bg-orange-400 text-blue-600 rounded-full font-semibold uppercase tracking-wide text-xs">Luxe</span>
          <div className="mt-2 flex items-center text-sm text-gray-600">
          <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
    <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/></svg>
    </div>
          <span className="ml-2">{output.Naam} </span>
        </div>
        <Link href={`clubs/${output._id}`}>
        <h4 className="mt-1 text-gray-900 font-semibold text-lg">{output.Naam}</h4>
        </Link>
        <div className="mt-1">
          <span className="text-gray-900">€ {output.Naam}</span>
          <span className="ml-1 text-sm text-gray-600">/mnd</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <svg v-for="i in 5" className="h-4 w-4 fill-current" >
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
          </svg>
          <span className="ml-2">{output.Naam} </span>
        </div>
      </div>
    </div>
    </div>
      </li>
      
    ))}
  </ul>
  </div>
  </div>
 </div>
)};

export async function getServerSideProps(context) {
    const { db } = await connectToDatabase()
  
    const data = await db.collection("output").find().sort({_id: 1}).limit(40).toArray();
    
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
  