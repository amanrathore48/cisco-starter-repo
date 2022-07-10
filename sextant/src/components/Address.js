import React, {useState, useEffect} from 'react'

function Address(props) {
    const [ip, setIp] = useState({
        url: props.url,
        ipAddress: null
    })
    
    useEffect(() => {
        const url = props.url;
    
        const  fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setIp({ ipAddress: json.ip });
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    return (
        <span className="Address">
            {ip.ipAddress}
        </span>
  )
}

export default Address