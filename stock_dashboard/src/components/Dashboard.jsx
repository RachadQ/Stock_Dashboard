import React,  { useState, useEffect } from 'react';
import fakeData from '../fakeData/FakeData.json'
import '../styles/Dashboard.css'
function Dashboard({onToggle}) {

    const [positions,setPositions] = useState([]);
    const [performance,setPerformance] = useState({});

    useEffect(
        () => {
            
            setTimeout(() => {
                console.log("fetching data...")
                setPositions(fakeData.position);
                setPerformance(fakeData.performance);
            }
            ,1000)
        }
    )

    return(

        <div className="dashboards">
            <h1>
                <table>
                    <thread>
                        <tr>
                            <th>symbol</th>
                            <th>quantity</th>
                            <th>avg price</th>
                            <th>current price</th>
                            <th>P&L</th>
                        </tr>
                    </thread>
                    <tbody>
                        {positions.map(
                            (p,idx) => (
                                <tr key={idx}>
                                    <td onClick={() => onToggle(idx)}>{p.symbol}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.avg_price}</td>
                                    <td>{p.current_price}</td>
                                    <td>{(p.current_price-p.avg_price) * p.quantity}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </h1>
        </div>
    )
}

export default Dashboard