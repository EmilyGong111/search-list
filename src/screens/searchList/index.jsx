import { List } from "./list"
import { SearchPanel } from "./searchPanel"
import {useState, useEffect} from "react"
import axios from "axios"
const apiUrl= import.meta.env.VITE_APP_API_URL
import qs from "qs"
import { cleanObject } from "@/utils"


export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name:'',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  //get list
  useEffect(() => {
    axios.get(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async response =>{
        console.log(response);
        if(response.statusText === 'OK'){
          setList(await response.data)
        }
      }
    )
  },[param])

  //get managers
  useEffect(() => {
    axios.get(`${apiUrl}/users`).then(
      async response =>{
        console.log(response);
        if(response.statusText === 'OK'){
          setUsers(await response.data)
        }
      }
    )
  },[])
  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List users={users} list={list}/>
  </div>
}