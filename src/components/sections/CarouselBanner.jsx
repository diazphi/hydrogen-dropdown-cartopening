import {Heading, Section, Grid} from '~/components';
import {Suspense} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './css/swiper.css';
import './css/custom.css';
import {
    flattenConnection,
    Image,
    Link,
    Money,
    useMoney,
  } from '@shopify/hydrogen';
export function CarouselBanner({data}) {
    return (
        <Suspense>
            <Section>        
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                   
                             <SwiperSlide>                                 
                              Swiper Slide 1
                            </SwiperSlide>
                            <SwiperSlide>                                 
                              Swiper Slide 2
                            </SwiperSlide>
                            <SwiperSlide>                                 
                              Swiper Slide 3
                            </SwiperSlide>
                            <SwiperSlide>                                 
                              Swiper Slide 4
                            </SwiperSlide>
                </Swiper>
            </Section>
        </Suspense>
    );
}