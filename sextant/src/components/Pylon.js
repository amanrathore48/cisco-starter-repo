import React, {useState, useEffect} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

function Pylon() {
    const [time, setTime] = useState({latency:null})
    
    useEffect(() => {
        client.onmessage = async (message) => {
            setTime({
                latency: new Date().getTime() - message.data
                
            })
        };
    }, []);
    return (
        <span className="pylon">
            {time.latency}
        </span>
    )
}

export default Pylon;
