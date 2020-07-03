import { useState } from 'react';

const useSurvey = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        if (count >= 1) {
            if (window.confirm('더 나은 오늘의 수라를 위해 도와 주세요!')) {
                window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSe_FP2tTco5NW_e2PqZyDbWLkGSnyHhhvSL00p-NjgYp4qqxA/viewform',
                );
                setCount(0);
            }
        } else {
            setCount(count + 1);
        }
    };
    return onClick;
};

export default useSurvey;
