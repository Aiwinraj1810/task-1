import React from 'react'
import './styles/dashboard.css'
import mainImage from './styles/logo192.png'
import UserStatus from './UserStatus'
import { PieChart, Pie, Tooltip } from "recharts";
import Graphs from './Graphs'
import ProgressBar from './ProgressBar';
import LineGraph from './LineGraph'
import Barchart from './BarChart'


const Dashboard = () => {

    const data = [
        { name: "Student 1", students: 100 },
        { name: "Student 2", students: 74 },
        { name: "Student 3", students: 86 },
        { name: "Student 4", students: 75 },
    ];

    
        const maths = 60;
        const Science=75;
        const English=90;
    
    const average = (maths+Science+English)/3

    const testData = [
        { bgcolor: "#6a1b9a", completed: average },
      ];
    const sec4test = [
        { bgcolor: "red", completed: average },
      ];
    



  return (
    <div className='dash-wrap'>
      <div className="dash-top">
        <span className='main-title'>Aiwinraj</span><br/>
        <span className='Description'>Dashboard page</span>
      </div>

      <div className="dash-main">
        <div className="dash-wrap">

        <div className="section-1">
            <div className="sec-content-1">
                <h3 style={{display:'block'}}>Sessions by channel</h3>
                <div className='sec-main'>

                <div >
                <PieChart width={250} height={200}>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={100}
                    innerRadius={90}
                    fill="aqua"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>
</div>
                <span>
                    <ul>
                        <li>
                            list1
                        </li>
                        <li>
                            list2
                        </li>
                        <li>
                            list3
                        </li>
                        <li>
                            list4   
                        </li>
                    </ul>
                </span>
                </div>
            </div>
            <div className="sec-content-1">
            <h3 style={{display:'block'}}>Events</h3>
            <div className='sec-description'>

                <p style={{margin:0}}> &lt;10-Normal</p>
                <p style={{margin:0}}>&gt;40-Not safe</p>
                <p style={{margin:0}}>&gt;90-Critical</p>
            </div>
                <div className='sec-main'>
                <Graphs />
                
                <span>
 
                </span>
                </div>
            </div>
            <div className="sec-content-1">
            <div className='sec-description-1-3'>
            <h3 style={{display:'block'}}>Marks average</h3>
                </div>
                <div className='sec-main-1-3'>
                <div className="stat-status">
                    <p>Maths</p>
                    <p>{maths}</p>

                </div>
                <div className="stat-status">
                    <p>English</p>
                    <p>{English} </p>

                </div>
                <div className="stat-status">
                    <p>Science</p>
                    <p>{Science} </p>

                </div>
              <div>
              {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
              </div>
                </div>
            </div>
        </div>

        <div className="section-2">
            <div className="sec-content-2">
                <h3 style={{display:'block'}}>Sessions by channel</h3>
                <div className='sec-main-2'>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                    <div className='sec-content-2-1'>
                        <div>Enrty 1</div>
                        <div>Entry status</div>

                    </div>
                </div>
            </div>
            
            <div className="sec-content-2">
                <h3 style={{display:'block'}}>Sales analytics</h3>
                <div className='sec-main-3'>
                    <div className='sec-content-2-2'>
                        <div>Java</div>
                        

                    </div>
                    <div className='sec-content-2-2'>
                        <div>PhP</div>
                        

                    </div>
                    <div className='sec-content-2-2'>
                        <div>C++</div>
                        

                    </div>
                    <div className='sec-content-2-2'>
                      <button>btm</button>

                    </div>

                
                  
                    
                </div>
                <div className="img-space">
                    <LineGraph />

                </div>
            </div>
            
            <div className="sec-content-3">
            <h3 style={{display:'block'}}>Sales analytics</h3>
            <div className="sec-description">
                <div>
                <p>Total earrnings</p>
                <p>$50,000</p>
                <span>Difference</span>
                </div>
                <div>
                <p>Total earrnings</p>
                <p>$50,000</p>
                <span>Difference</span>
                </div>
                            <div className='sec-2-bar'>

                            <Barchart />
                            </div>
            </div>
            </div>


        </div>

        <div className='section-3'>
        <div className="sec-content-3">
                <h3 style={{display:'block'}}>E-commerce analytics</h3>
                <div className='sec-3-wrap'>

                <div className="sec-3-main">
                    <div className='sec-3-description'>

                  <div>Date start-Date end</div>
                  <div className='buttons'>
                    <div>

                    <button>btn</button>
                    </div>
                    <div>

                    <button>btn</button>
                    </div>
                    <div>

                    <button>btn</button>
                    </div>
                   
                  </div>
                    </div>
                    <div className='img-space'>

                    <LineGraph /> 
                    </div>
                  
                </div>
                <div className="sec-3-details">
                    <div><b>Inbound</b></div>
                    <div className='inbound-details'>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                    </div>
                    <div><b>Outbound</b></div>
                    <div className='inbound-details'>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                        <div>
                            <span>entry 1</span>
                            <span>result</span>
                        </div>
                    </div>
                </div>
                </div>
             
            </div>
        </div>

        <div className='section-4'>
            <div className='sec-4-wrap'>
                
        <div className="sec-content-4">
                <h3 style={{display:'block'}}>E-commerce analytics</h3>
                <div className='progress-wrap'>

                <div className='temp-progess'>
                    <span>Title</span>
                    {sec4test.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
                </div>
                <div className='temp-progess'>
                    <span>Title</span>
                    <ProgressBar />
                </div>
                    <span>Title</span>
                    <ProgressBar />
                </div>
                <div className='sec-4-graph'>

                <Graphs /> 
                </div>
            </div>
            </div>
        <div className="sec-content-4">
                <h3 style={{display:'block'}}>Project-status</h3>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Budget</th>
                        <th>Status</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><UserStatus/></td>
                        <td>$20,000</td>
                        <td>Germany</td>
                        <td>2027</td>
                        <td><button>btm</button></td>
                    </tr>
                    <tr>
                        <td><UserStatus/></td>
                        <td>$5000</td>
                        <td>Mexico</td>
                        <td>2026</td>
                        <td><button>btm</button></td>
                    </tr>
                    <tr>
                        <td><UserStatus/></td>
                        <td>$56000</td>
                        <td>Mexico</td>
                        <td>2025</td>
                        <td><button>btm</button></td>
                    </tr>
                    <tr>
                        <td><UserStatus/></td>
                        <td>$7600</td>
                        <td>Mexico</td>
                        <td>2025</td>
                        <td><button>btm</button></td>
                    </tr>
                    </table>
            </div>
        </div>
  
     
        </div>
      </div>
    </div>
  )
}

export default Dashboard
