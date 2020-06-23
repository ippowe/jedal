import { useState } from 'react';

const useSurvey = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        if (count >= 1) {
            if (window.confirm('더 나은 오늘의 수라를 위해 도와 주세요!')) {
                window.open('https://docs.google.com/forms/d/1bgbBQwu0oPBJjbYme5r3tfLNFG3cjt0Qognb9xEWOeQ/prefill');
                setCount(0);
            }
        } else {
            setCount(count + 1);
        }
    };
    return onClick;
};

export default useSurvey;
