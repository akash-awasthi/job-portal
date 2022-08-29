
import React, { useContext, createContext, useState, useEffect } from 'react';
import {db } from '../firebase';
import {collection,getDocs,addDoc,doc,deleteDoc,updateDoc} from 'firebase/firestore';
import {useAuth} from './AuthContext';
const DataContext = createContext();
export function useData() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {
    const {currentUser}=useAuth();
    const jobCollectionRef=collection(db,"job");
    const jobSeekerCollectionRef=collection(db,"Job_Seeker");
    const [updateUseEffect,setUpdateUseEffect]=useState(true);
    const [jobs,setJobs]=useState([]);
    const [jobSeekers,setJobSeekers]=useState([]);
    useEffect(()=>{
        const getJobs= async()=>{
          const data=await getDocs(jobCollectionRef);
          setJobs(data.docs.map((doc=>({...doc.data(), id: doc.id}))))
        }
        const getJobSeekers= async()=>{
            const data=await getDocs(jobSeekerCollectionRef);
            setJobSeekers(data.docs.map((doc=>({...doc.data(), id: doc.id}))))
          }
        getJobs();
        getJobSeekers();
      },[updateUseEffect])
      
    const createJob=async (obj)=>
    {
      await addDoc(jobCollectionRef,obj)
      setUpdateUseEffect(!updateUseEffect);
    }
    const updateJobSeeker=async(id,obj)=>{
        const userDoc=doc(db,"Job_Seeker",id)
            const newFields=obj;
            await updateDoc(userDoc,newFields)
            setUpdateUseEffect(!updateUseEffect)
    }
    const updateApplication=async(id)=>{
      let temp=jobs.filter((job)=>{
        return job.id==id
      })
      let updatedApplications=temp[0].Applications
      updatedApplications.push(currentUser.email)
      const jobDoc=doc(db,"job",id)
      const newField={Applications:updatedApplications}
      await updateDoc(jobDoc,newField)
      setUpdateUseEffect(!updateUseEffect)

    }
    const deleteJob=async(id)=>{
      const jobDoc=doc(db,'job',id)
      await deleteDoc(jobDoc)
      setUpdateUseEffect(!updateUseEffect)
    }
    // const deleteUserType = async () => {
    //     const x = userRoleList.filter((u) => {
    //         return u.email === currentUser.email;
    //       })
    //       console.log("Type of Deleted Id ",typeof(x[0].id));
    //       console.log("Deleted Id",x[0].id);
    //     const userDoc = doc(db, "usertype", x[0].id)
    //     await deleteDoc(userDoc);
    //     setUpdateUseEffect(!updateUseEffect)
    //   }


    const value = {
        jobCollectionRef,
        jobs,
        createJob,
        updateUseEffect,
        setUpdateUseEffect,
        jobSeekers,
        updateJobSeeker,
        updateApplication,
        deleteJob,
    };
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>

    );
}