import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Topic() {
    let { topicId } = useParams();

    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth');
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                Topik yang dipilih adalah {topicId}
            </header>
        </div>
    )
}