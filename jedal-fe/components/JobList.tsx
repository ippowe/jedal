/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';

export interface IJob {
    id: string;
    applyUrl: string;
    title: string;
    company: {
        name: string;
    };
}

interface IProps {
    jobs: IJob[];
}

const List = styled.ul``;
const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

const JobList: React.FC<IProps> = ({ jobs }) => {
    const listItems = jobs.map((job) => {
        return (
            <ListItem key={job.id}>
                {job.title} by {job.company.name} [
                <a href={job.applyUrl} target="_blank">
                    Apply
                </a>
                ]
            </ListItem>
        );
    });

    return <List>{listItems}</List>;
};

export default JobList;
