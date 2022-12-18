import {Heading, Section, Grid} from '~/components';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
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
    return (
            <Section>        
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                pagination={{
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                navigation={true}
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
    );
}