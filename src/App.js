import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import ActionRow from './components/ActionRow';
import Pomodoro from './components/Pomodoro'

function App() {
    const WORK_TIME = 25
    const BREAK_TIME = 5
    const [isWorkMode, setIsWorkMode] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const [minutes, setMinutes] = useState(WORK_TIME)
    const [seconds, setSeconds] = useState(0)
    const [pomodoroVisible, setPomodoroVisible] = useState(false)


    const start = () => {
        setIsActive(true)
    }

    const pause = () => {
        setIsActive(false)
    }

    const finish = () => { 
        setPomodoroVisible(true)
    }

    const reset = () => {
        setIsActive(false)
        setPomodoroVisible(false)
        setMinutes(isWorkMode ? WORK_TIME : BREAK_TIME)
        setSeconds(0)
    }

    const changeMode = (newIsWork) => {
        setIsWorkMode(newIsWork)
    }

    const tick = () => {
        if (seconds === 0) {
            if (minutes === 0) {
                finish()
            } else {
                setMinutes(minutes - 1)
                setSeconds(59)
            }
        } else {
            setSeconds(seconds - 1)
        }
    }

    useEffect(() => {
        reset()
    }, [isWorkMode])


    useEffect(() => {
        let interval = null

        if (isActive) {
            interval = setInterval(tick, 10)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }
    }, [isActive, seconds, minutes, tick])

    return (
        <div className="pomodoro">
            <NavBar changeMode={changeMode} isWork={isWorkMode} />
            <Clock minutes={minutes} seconds={seconds} />
            {pomodoroVisible && <Pomodoro />}
            <ActionRow isActive={isActive} start={start} pause={pause} reset={reset} />
        </div>
    )
}

export default App;
