import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails'

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('youtube');
    }
    
    onTermSubmit = async (term) => {
        const KEY = 'AIzaSyDs17olm3Gy5uQHGXqNaXHG5b4xlgyIC7k';

        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 10,
                key: KEY
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }    

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        // console.log('From App Component', video);
    }
    
    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        {/* <div className="eleven wide column"> */}
                            <VideoDetails video={this.state.selectedVideo} />
                        {/* </div> */}
                        {/* <div className="five wide column"> */}
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        {/* </div> */}
                    </div>
                </div>    
            </div>
        )
    }
}

export default App;