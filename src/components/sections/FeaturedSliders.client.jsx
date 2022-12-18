import {Heading, Section, Grid} from '~/components';
import {Suspense} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useEffect, useState } from 'react'
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
export function FeaturedSliders({data}) {
    const [color, setColor] = useState('blue');
    useEffect(() => setColor('red'), []);
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
                    {(data?.nodes || []).map((item) => (
                             <SwiperSlide key={item.id}>                                 
                                <Link to={`/products/${item.handle}`}>                           
                                        <Image
                                            widths={[320]}
                                            sizes="320px"
                                            loaderOptions={{
                                                scale: 2,
                                                width: 320,
                                                height: 400,
                                            }}
                                            // @ts-ignore Stock type has `src` as optional
                                            data={item.variants.nodes[0].image}
                                            alt={item.variants.nodes[0].image.altText || `Picture of ${item.title}`}
                                            loading="lazy"
                                            />
                                            <div className="Overlay-Text">
                                                <p className="Title">{item.title}</p>
                                            </div>
                                </Link>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </Section>
        </Suspense>
    );
}