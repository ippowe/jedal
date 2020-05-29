import React from 'react';
import styled from 'styled-components';

interface IPhraseProps {
    className?: string;
    phrase: string;
}

const EMPHASIS_REGEX = /<(.*?)>/g;

const Wrapper = styled.div``;

const parsePhrase = (phrase: React.ReactNode): React.ReactNode => {
    if (typeof phrase === 'string') {
        const tokens = phrase.match(EMPHASIS_REGEX);
        if (!!tokens) {
            const result: any[] = [];
            let tempPhrase = phrase;
            while (tokens.length !== 0) {
                const token = tokens.shift();
                const words = tempPhrase.split(token);
                const empasis = <b key={token}>{token.replace(/<|>/g, '')}</b>;
                result.push(words[0], empasis);
                tempPhrase = words[1];
            }
            result.push(tempPhrase);
            return result;
        } else {
            return phrase;
        }
    } else return phrase;
};

const DecoratedPhrase: React.FC<IPhraseProps> = (props) => {
    const { className, phrase } = props;

    return <Wrapper className={className}>{parsePhrase(phrase)}</Wrapper>;
};

export default DecoratedPhrase;
