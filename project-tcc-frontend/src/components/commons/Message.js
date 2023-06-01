
import "./Message.css"

import { useState, useEffect } from 'react'






function Message({ typeMsg, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])


    return (
        <>
            {visible && (
                
                <div className= "message" type={typeMsg}>{msg}</div>
            
            )}
            
        
        </>
    );
};
export default Message;