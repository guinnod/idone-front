import styles from './styles/_persons-card.module.scss'
import { Button } from '@ui/Button'
import { SelectPerson } from '@components/SelectPerson/SelectPerson'
import { Window } from '@components/ui/Window'
import { Box } from '@components/ui/Box'
import { List } from '@components/ui/List'
import colors from '@styles/colors.json'
import {DropDown} from "@ui/DropDown";
import {useEffect, useState} from "react";
import {get, post} from "@api/index.js";

export const AddProject = ({opener, setOpener}) => {
    const [users, setUsers] = useState([])
    const [subject, setSubject] = useState([])
    const [name, setName] = useState([])
    const [subjectOptions, setSubjectOptions] = useState([])
    const [userOptions, setUserOptions] = useState([])
    useEffect(()=>{
        get({path: 'subject', isAuth: true})
            .then(res=>{
                const resOptions = res.data;
                const temp = [];

                resOptions.forEach( function (option){
                    console.log(option)
                    temp.push({
                        value: option.name,
                        label: option.name
                    })
                })
                setSubjectOptions(temp);
                console.log(temp);
            })
        get({path: 'students', isAuth: true})
            .then(res=>{
                const resOptions = res.data;
                const temp = [];

                resOptions.forEach( function (option){
                    console.log(option)
                    temp.push({
                        value: option.email,
                        label: option.first_name + " " + option.last_name
                    })
                })
                setUserOptions(temp);
                console.log(temp);
            })

    }, [])
    const handleSubmit = () => {
        const subjectData = subject.value;
        const usersData = [];
        users.forEach((user)=>{
            usersData.push(user.value)
        })
        const data = {
            name: name,
            subject: subjectData,
            users: usersData
        }
        console.log(data)
        post({path: 'temp', data: data, isAuth: true})
            .then(res=>{
                alert(res.data)
            })
            .catch(error=>{
                alert(error.response.data)
            })
    }
    const handleName = (option) => {
        setName(option.target.value)
    }
    return (
        <Window title='Create new project' closeAction={setOpener}>
            <List gap={40} style={{ padding: '20px 40px' }}>
                <input
                    type="text"
                    style={{
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '200px',
                        outline: 'none',
                        transition: 'box-shadow 0.2s ease',
                        boxShadow: 'none',
                    }}
                    onChange={handleName}
                    placeholder="Select options"
                    onFocus={(e) => {
                        e.target.style.boxShadow = '0 0 0 2px #4c9aff';
                    }}
                    onBlur={(e) => {
                        e.target.style.boxShadow = 'none';
                    }}
                />
                <div>Subject</div>
                <DropDown value={subject} setValue={setSubject} options={subjectOptions}/>
                <div>Students</div>
                <DropDown value={users} setValue={setUsers} isMulti options={userOptions}/>
                <Button style={{background: colors.main}} onClick={handleSubmit}>
                    Submit
                </Button>
            </List>
        </Window>
    )
}