import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import { create, all } from 'mathjs';
import Papa from 'papaparse';

const math = create(all)

function IRT() {
  const [result, setResult] = useState(null);
  const [plotData, setPlotData] = useState({ icc: { x: [], y: [] }, tcc: { x: [], y: [] }});
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [discrimination, setDiscrimination] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    const data = 'attemps_test.csv';
    axios
      .post(`http://localhost:4000/estimate/${data}`)
      .then(response => {
        const a = response.data.Discrimination ?? [];
        const b = response.data.Difficulty ?? [];
        setDiscrimination(a);
        const selectedDiscrimination = a[selectedExercise];
        const selectedDifficulty = b[selectedExercise];
        const x = response.data.Ability ?? [];
        const sigmoid = (x, a, b) => {
          const denominator = 1 + math.exp(-a * (x - b));
          return denominator === 0 ? NaN : 1 / denominator;
        };
        console.log(a,b)
        const y = x.map(val => sigmoid(val, selectedDiscrimination, selectedDifficulty));
        const sortedData = x.map((value, index) => [value, y[index]]).sort((a, b) => a[0] - b[0]);
        const sortedX = sortedData.map(pair => pair[0]);
        const sortedY = sortedData.map(pair => pair[1]);
        const meanA = math.mean(a);
        const meanB = math.mean(b);
        const minAbility = math.min(...x);
        const maxAbility = math.max(...x);
        const range = maxAbility - minAbility;
        const step = range / 100;
        const abilityValues = math.range(minAbility, maxAbility, step).toArray();
        const y2 = abilityValues.map(val => sigmoid(val, meanA, meanB));

        setPlotData({
          icc: { x: sortedX, y: sortedY },
          tcc: { x: abilityValues, y: y2 }
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [selectedExercise]);
  const handleExerciseChange = event => {
    const exerciseIndex = parseInt(event.target.value);
    setSelectedExercise(exerciseIndex);
    };
    const listViewData = discrimination.map((_, index) => ({
      id: index,
      text: `Exercise ${index}`
    }));
 return (
  <div>
    <select value={selectedExercise} onChange={handleExerciseChange}style={{ marginLeft:450 , marginBottom:50}}>
  {discrimination.map((_, index) => (
    <option key={index} value={index}>
      Exercise {index}
    </option>
  ))}
</select>
{isLoading && <p>Loading...</p>} 
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1  }}>
        <Plot
          data={[
            {
              x: plotData.icc.x,
              y: plotData.icc.y,
              type: 'scatter',
              mode: 'lines+markers',
              line: { color: 'black' },
              marker: { symbol: 'circle', size: 8 }
            }
          ]}
          layout={{
            width: 500,
            height: 600,
            title: 'IRT Model - Item Response Curve',
            xaxis: { title: 'Latent Trait' },
            yaxis: { title: 'Item Response' }
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
      
        <Plot
          data={[
            {
              x: plotData.tcc.x,
              y: plotData.tcc.y,
              type: 'scatter',
              mode: 'lines',
              line: { color: 'black' },
              marker: { symbol: 'circle', size: 8 }
            },
          ]}
          layout={{ width: 500, height: 600, title: 'IRT Model - Test Characteristic Curve' }}
        />
      </div>
    </div>

  </div>
);

}

export default IRT;

