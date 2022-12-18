import {Heading, Section, Grid} from '~/components';
import {Suspense} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './css/swiper.css';
export function FeaturedSliders({data}) {

    console.log(data);
    return (
        <Suspense>
            <Section>        
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </Section>
        </Suspense>
    );
}