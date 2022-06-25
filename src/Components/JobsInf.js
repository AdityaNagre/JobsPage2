import React, {useState, useEffect} from 'react'
import xData from './Data.json'
import JobCard from './JobCard'
import Spinner from './Spinner'


export default function JobsInf() {
    const [Data, setData] = useState([])
    const [jobCount, setjobCount] = useState(0)
    const [loading, setloading] = useState(true)

    const fetchAPI= async()=>{
        const url='https://remotive.com/api/remote-jobs?limit=30'
        const data= await fetch(url)
        const parsedData= await data.json()
        setData(parsedData.jobs)
        setjobCount(parsedData['job-count'])
        setloading(false)
      }
      
      useEffect(()=>{
        fetchAPI();
      },[])

    return (
        <div>
            {loading && <Spinner/>}
                {Data.map((e)=>{
                    return <JobCard
                            key={e.id}
                            link={e.url}
                            job={e.title}
                            company={e.company_name}
                            logo={e.company_logo}
                            timing={e.job_type}
                            salary={e.salary}
                            site={e.candidate_required_location.slice(0,20)}
                            tags={e.tags.slice(0,8)}
                    />
                })} 
        </div>
    )
}
