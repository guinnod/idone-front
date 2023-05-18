import styles from './styles/_task-edit.module.scss'
import userPhoto from '@images/userPhoto.jpg'
import shareIcon from '@icons/share.svg'
import arrowIcon from '@icons/arrow.svg'
import userIcon from '@icons/user-add.svg'
import calendarIcon from '@icons/calendar.svg'
import timerIcon from '@icons/timer.svg'
import { DescriptionInput } from '@components/TaskEdit/DescriptionInput'
import { TaskButton } from '@components/TaskEdit/TaskButton'
import { TaskDate } from '@components/TaskEdit/TaskDate'
import { OtherUsers } from '@ui/OtherUsers'
import { Box } from '@ui/Box'
import { Checklist } from '@components/TaskEdit/Checklist'
import { TaskCheck } from '@components/TaskEdit/TaskCheck'
import { Activity } from '@components/TaskEdit/Activity'
import { Window } from '@components/ui/Window'
import Select from 'react-select';
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { get, post } from '@/api'
import colors from '@assets/styles/colors.json'
export const TaskAdd = ({ closeAction, addTask, isNewStatus }) => {
    const boxStyle = {
        position: 'absolute',
        top: 20,
        left: '50%'
    }
    const createTask = () => {
        const usersData = [];
        users.forEach((user) => {
            usersData.push(user.value)
        })
        const data = {
            project_id: addTask.project_id,
            status: addTask.status,
            description: document.getElementById("createText").value,
            date: formatDate(selectedDate),
            users: usersData, 
            name: document.getElementById("nameTask").value, 
            priority: priority.value
        }
        if (isNewStatus) {
            data.status = document.getElementById("newStatus").value;
        }
        post({path: 'add-task', data: data, isAuth: true})
        .then(res=>{
            location.reload()
        })
        .catch(err=>{
            alert(err.response.data)
        })
    }
    const [users, setUsers] = useState([])
    const [priority, setPriority] = useState('Urgent')
    const pP = ["Urgent", "High", "Normal", "Low"]
    const tempP = [];
        pP.forEach(e=>{
            console.log(e);
            tempP.push({
                value: e,
                label: e
            })
        })
       
    
    const [userOptions, setUserOptions] = useState([])
    useEffect(() => {
        
        post({ path: 'project-users', data: {project_id: addTask.project_id}, isAuth: true })
            .then(res => {
                const resOptions = res.data;
                const temp = [];

                resOptions.forEach(function (option) {
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

    const formatDate = (currentDate) => {
        currentDate = currentDate ?? new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();

        return `${year}-${month}-${day}`;
    }

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Window title='New task' closeAction={closeAction}>
            <Box gap={20} style={boxStyle}>
                <img src={userIcon} alt="add person" />
                <img src={timerIcon} alt="timer" />
                <img src={calendarIcon} alt="calendar" />
            </Box>
            <section style={{ width: 'max-content' }} className={styles.anchor}>
                <section>
                    <input id='nameTask' style={{border: `1px solid ${colors.gray_mid}`, padding: '10px 15px', borderRadius: '5px', width: '100%'}} placeholder='Name of the task'></input>
                    {isNewStatus ?
                    <input id='newStatus' style={{border: `1px solid ${colors.gray_mid}`, padding: '10px 15px', borderRadius: '5px', width: '100%'}} placeholder='New status'></input>
                    :<></>}
                    <TaskDate handleDateChange={handleDateChange} selectedDate={selectedDate} />
                    <Select placeholder="Add users" value={users} setValue={setUsers} onChange={(option) => { setUsers(option) }} isMulti options={userOptions} />
                    <Select placeholder="Select priority" value={priority} setValue={setPriority} onChange={(option) => { setPriority(option) }} options={tempP} />
                    <DescriptionInput id="createText" />


                    <div className={styles.box}>
                        <Box>
                            <img src={arrowIcon} alt="arrow" onClick={createTask} />
                            <img src={shareIcon} alt="share" />
                        </Box>
                    </div>
                </section>

            </section>
        </Window>
    )
}