import {Suspense} from 'react';
export function FeaturedVIP() {
    return (
        <Suspense>
                <div className="vip-container">     
                    <img
                    width="1305"
                    height="171"
                    // @ts-ignore Stock type has `src` as optional
                    src="/src/assets/Christmas_Suggestions.jpg"
                    alt="VIP SMS Messages"
                    loading="lazy"
                    />
                    <div className="overlay-text">
                        <h2>VIP SMS Messages!</h2>
                        <a href="#">Sign-up</a>
                    </div>
                </div>
        </Suspense>
    );
}