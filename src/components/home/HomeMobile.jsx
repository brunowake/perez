import React, { useState } from 'react'
import { useTrail, a } from 'react-spring'
import Profissional from '../profissional/Profissional'
import './Home.css'
import escritorio from '../../img/bg.jpg'



function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 400 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div className="trails-main" {...props}>
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={index + 1}
                        className="trails-text"
                        style={{ ...rest, transform: x.to((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div >{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </div>
    )
}

function Trail2({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 1000, friction: 1000 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div className="trails-main" {...props}>
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={index + 1}
                        className="trails-text"
                        style={{ ...rest, transform: x.to((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div >{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </div>
    )
}



export default props => {

    const [open, set] = useState(true)
    const [open2, set2] = useState(true)
    return (
        <div className='trailContent' >

            {open ? <Trail open={open}
                onClick={() => {
                    set2(_ => !open2)
                }}
                >
                <span><strong>Dr</strong> Pedro</span>
                <span>Vinícius</span>
                <span>Perez</span>
            </Trail> :
                <Trail2 open={open2} >
                    <div>
                        <img style={{width:'80%', height:'80%', marginLeft:'10%'}} src={escritorio} alt=""/>
                    </div>
                </Trail2>
            }


            {open2 ? <Trail open={open2}
                onClick={() => {
                    set(_ => !open)
                }}
 
                >
                <span >Perez </span>
                <span>Advocacia</span>
            </Trail> :

                <Trail2 open={open}  >
                    <Profissional/>
                </Trail2>
            }

        </div>
    )
}