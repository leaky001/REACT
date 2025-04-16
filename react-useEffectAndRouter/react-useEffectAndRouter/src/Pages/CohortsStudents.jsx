import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const CohortsStudents = ({cohorts}) => {
    console.log({cohorts})
    const {id} = useParams();
    const [students, setStudents] = useState([])

    useEffect(() => {
        if(students.length) return;

        const parseNum = parseInt(id)

        console.log(parseNum)

        const filteredCohort = cohorts?.filter(
            (cohort) => cohort.id === parseNum
    );
        
        console.log(filteredCohort[0])

        if(filteredCohort .length) setStudents (filteredCohort[0]?.students)
    }, [] );
  return (
    <div>
      <table>
        <thead>
            <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            </tr>
        </thead>
        <tbody/>
        {students?.map((student, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.height}</td>
                </tr>
            ))
        }
      </table>
    </div>
  )
}

export default CohortsStudents
