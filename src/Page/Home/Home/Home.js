import React from 'react';
import { Link } from 'react-router-dom';

import Alhouse from '../../HousList/AllHouse/Alhouse';
import CarPakeg from '../../LessonPakeg/CarPakeg';
import Slider from '../Slider/Slider';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <CarPakeg />
        </div>
    );
};

export default Home;