"use client"
import React from 'react'
import styles from "./page.module.css"

import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});
const dataLine = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
  datasets: [
    {
      label: 'RCM APPLICATION',
      data: [12, 19, 3, 5, 2, 323, 100, 89, 98, 130, 28, 16, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const dataBar = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
  datasets: [
    {
      label: 'RCM APPLICATION',
      data: [112, 19, 193, 195, 222, 323, 100, 89, 98, 130, 28, 16, 10],
      backgroundColor: [
        '#4B7BECFF',
        '#FAB740FF',

      ],
      borderColor: [
        '#4B7BECFF',
        '#FAB740FF',

      ],
      borderWidth: 1,
    },
  ],
};
const data = {
  labels: [
    'Leads  ',
    'Proposals',
    'Negotiation',
    'Contracts',
    'Won',
    'Lose'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [130, 70, 100, 12, 100, 32],
    backgroundColor: [
      '#4B7BECFF',
      '#FAB740FF',
      '#75AF73FF',
      '#FE8C81FF',
      '#1DD75BFF',
      '#DEE1E6FF',
    ],
    hoverOffset: 4
  }]
}
const ChartP = ({ type, title, lineBool }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>{title && title}</h2>
      <div className={styles.container}>
        {
          type === "line" ? <Line data={dataLine} height={250} width={250}/> :
            type === 'bar' ? <Bar data={dataBar} /> :
              <Doughnut data={data} height={250} />
        }
      </div>

    </div>

  )
}

export default ChartP