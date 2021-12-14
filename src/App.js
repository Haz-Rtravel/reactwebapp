import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import Main from "./components/Main"
import VideoView from "./components/VideoView"
import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/storage";

import { Link } from "react-router-dom";

class Frame extends React.Component {
  
  componentDidMount() {
    console.log("is returned")
    console.log(this.props.data)
    const data = this.props.data

    data.map((videodata) => {
      console.log(videodata)
    })

    const video = data.map((videodata) => {
      // <SampleView title={videodata.vid} key={videodata.vid}></SampleView>
      <a>{videodata.vid}</a>
    })

    this.setState({video: video})
  }

  render() {

    console.log(this.props.data)
    const data = this.props.data

    data.map((videodata) => {
      console.log(videodata)
    })

    const video = data.map((videodata) => {
      // <SampleView title={videodata.vid} key={videodata.vid}></SampleView>
      <a>{videodata.vid}</a>
    })

    return (
      <div>
        <div class="contentBoxDisplay">
          <>{data.map((videodata) => {
            return (<a>{videodata.video_data.title}</a>)
          })}
          </>
        </div>
      </div>
    );
  }
}

class SampleView extends React.Component {
  render() {

    console.log(this.props.data)
    const data = this.props.data

    data.map((videodata) => {
      console.log(videodata)
    })

    const video = data.map((videodata) => {
      // <SampleView title={videodata.vid} key={videodata.vid}></SampleView>
      <div class="Xbox">
        <a href="/index_view.html">
          <img class="sampleImg" src={`https://firebasestorage.googleapis.com/v0/b/streaming-app-e3e3f.appspot.com/o/image%` + videodata.vid + `.jpg?alt=media`}>{videodata.video_data.title}</img>
          <div class="titleText">{videodata.video_data.title}</div>
        </a>
      </div>
    })

    return (
      <>
      {data.map((videodata) => {

        var image = `https://firebasestorage.googleapis.com/v0/b/streaming-app-e3e3f.appspot.com/o/image%2F` + videodata.vid + `.jpg?alt=media`
        console.log("this is data")
        console.log(videodata.video_data)
        return (
        <div class="Xbox">
          <Link to={{
            pathname: `/watch/${videodata.vid}`
          }}
            state={{vid:videodata.vid, data: videodata.video_data}}
          >
            <img class={videodata.video_data.title != undefined || videodata.video_data.title != null ? "sampleImg2" : "sampleImg"} alt="image" src={image}></img>
            <div class="titleText">{videodata.video_data.title}</div>
          </Link>
        </div>
        )
      })}
      </>
    );
  }
}

const datasample = 5;

export default class App extends React.Component {
  state = {
    videoArray: {},
    videoList: []
  };

  componentDidMount() {
    const db = getDatabase();
    const dbRef = ref(getDatabase());

    get(child(dbRef, "VIDEO")).then((snapshot) => {
      console.log(snapshot.val());

      this.setState({ videoArray: snapshot.val() });

      console.log("this is first List")
      console.log(this.state.videoArray);
    }).then(() => {
      var video_list = Object.keys(this.state.videoArray)
      console.log(video_list)

      var videoarray = [] 

      for (var i = 0; i < video_list.length; i++) {
        console.log('key: ' + video_list[i] + " / " + "value: " + JSON.stringify(this.state.videoArray[video_list[i]]))
        videoarray.push({vid: video_list[i], video_data: this.state.videoArray[video_list[i]]})
      }

      this.setState({videoList: videoarray})
      console.log(this.state.videoList)
    })
    
  }

  render() {
    return (
      <div className="App">

        

        <section class="HEADER">HEADER</section>
        <section class="mainLayer">
          <div id="userBox" class="mainInnerLayer">
            ASDF
          </div>
          <div id="contentBox" class="mainInnerLayer">
            <div class="mainBanner">{'aaa'} </div>
            <div>
              {/* <Frame data={this.state.videoList}></Frame> */}
              <div class="contentBoxDisplay">
                <SampleView data={this.state.videoList}></SampleView>
              </div>
            </div>
          </div>
        </section>
        <section class="FOOTER">FOOTER</section>
      </div>
    );
  }
}
