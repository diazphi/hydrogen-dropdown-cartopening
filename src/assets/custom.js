"use strict";
window.theme = window.theme || {}
theme.CustomJS = function() {
    function CustomJS() {
        this.state = {
            swiper: false
        }
        this.load();               

    }
    CustomJS.prototype.load = function() {
        var _ = this;        
        const observer = new MutationObserver((mutations, obs) => {
            const swipercontainer = document.querySelector('.swiper.mySwiper');
          
            if(swipercontainer && Swiper) {
                swipercontainer.addEventListener('mouseenter', () => {
                    if(!_.state.swiper) {
                        var swiper = new Swiper(".mySwiper", {});
                        _.state.swiper = true;
                    }                    
                })     
                obs.disconnect();
                return;
            }
        })
        observer.observe(document, {
            childList: true,
            subtree: true
        })
    }

    theme.CustomJS = new CustomJS;
}

theme.CustomJS();
