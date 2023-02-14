import React, { useState } from "react";
import Chart from "react-apexcharts";
import {Row} from 'antd'

function Statics() {
  const [state, setState] = useState({
    options: {
      colors: ["#004943"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Brightness","Voice Navigation","Screen Reader" ,"Contrast","Dictionary",
        'Monochrome','Dyslexic','Font Size',"Font Color",'Alignment',"MajorLinks","Spacing","Highlight Links","Saturation",
        "Bigger Size","Background Color"
      ],
      },
      
    },
    series: [
      {
        name: "Features",
        data: [40, 87, 45, 20, 69, 60, 75, 91,77,45,73,23,56,75,67,34],
      },
     
     
    ],
  });
  return (
   <>
    <div className="graph" style={{paddingLeft: "22%"}} >
      <h2>
      Have a look on Frequency of each feature on website
      </h2>
      
      
        <Row>
       
          <Chart 
            options={state.options}
            series={state.series}
            type="line"
            width="780" 
            height="450"
          />
         
          </Row>
          </div>
      </>
        
    
  );
}

export default Statics
