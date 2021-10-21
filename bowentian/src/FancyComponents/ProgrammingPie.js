import React from 'react';
import {Grid} from '@material-ui/core';
import Chart from "react-apexcharts"

export default function ProgrammingPie() {
    const series = [7,6,5,4,3,2,1]
    const options = {
        series: series,
        labels: ["Java", "CSS", "React", "C#", "F#", "C", "C++"]
    }

    return (
        <Grid
        xs = {12}
        style={{height: `${window.innerHeight}`, marginTop: "100px"}}
        >
            <Grid xs={12} item>
                <Grid xs={2} item/>
                <Grid xs={8} item>
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        // width="100%"
                        height={300}
                    />
                </Grid>

            </Grid>
        </Grid>
    );
}