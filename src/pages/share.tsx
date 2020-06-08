import React, { useState } from 'react';
import Button from '../components/Button';
import ShareModal from '../components/ShareModal';

const Share: React.FC<{}> = () => {
    const [isVisibleShareModal, setVisibleShareModal] = useState(true);
    return (
        <>
            <Button onClick={() => setVisibleShareModal(true)}>오늘의 수라 알리기</Button>
            <ShareModal isVisible={isVisibleShareModal} onClose={() => setVisibleShareModal(false)} />
        </>
    );
};

export default Share;
