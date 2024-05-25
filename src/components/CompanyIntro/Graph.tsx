'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  labels: string[];
  data: number[];
}

const BarChart = ({ title, labels, data }: BarChartProps) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        barThickness: 12,
        backgroundColor: '#27438C'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: title,

          font: {
            size: 16
          },
          color: '#27438C'
        },
        beginAtZero: true,
        display: true,

        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
