
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from '@rhazegh/react-circular-progressbar';
import React from 'react'
import '@rhazegh/react-circular-progressbar/dist/styles.css';

const Test = () => {
    const percentage = 90;
    return (
        <div className='dcmm'>
            <CircularProgressbarWithChildren
                value={75}
                strokeWidth={5}
                text={'75%'}
                styles={buildStyles({
                    textColor: 'black',
                    pathColor: "#f00",

                })}
            >

                <div style={{ width: "84%" }}>
                    <CircularProgressbar
                        value={70}
                        strokeWidth={5}
                        styles={buildStyles({

                        })}
                    />
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default Test