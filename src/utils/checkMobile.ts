const checkMobile = () => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
        const ua = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

        if (ua.indexOf('android') > -1) {
            //안드로이드
            return 'android';
        } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1) {
            //IOS
            return 'ios';
        } else {
            //아이폰, 안드로이드 외
            return 'other';
        }
    }
};

export default checkMobile;
