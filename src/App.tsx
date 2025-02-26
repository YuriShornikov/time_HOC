import React, { useState } from 'react';
import { TheTimes } from './components/Times/TheTimes';
import { Times } from './components/TimesProps/TimesProps';

// Компонент для отображения даты (обёрнут HOC)
const DateTimePrettyWrapped = TheTimes(Times);

interface VideoProps {
    url: string;
    date: string;
}

function Video(props: VideoProps) {
    return (
        <div className="video">
            <iframe
                src={props.url}
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <DateTimePrettyWrapped date={props.date} />
        </div>
    );
}

interface VideoListProps {
    list: VideoProps[];
}

function VideoList(props: VideoListProps) {
    return (
        <div>
            {props.list.map((item, index) => (
                <Video key={index} url={item.url} date={item.date} />
            ))}
        </div>
    );
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return <VideoList list={list} />;
}
