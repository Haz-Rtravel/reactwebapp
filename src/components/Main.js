import React from "react";

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
  
          return (
          <div class="Xbox">
            <a href="/index_view.html">
              <img class={videodata.video_data.title != undefined || videodata.video_data.title != null ? "sampleImg2" : "sampleImg"} alt="image" src={image}></img>
              <div class="titleText">{videodata.video_data.title}</div>
            </a>
          </div>
          )
        })}
        </>
      );
    }
  }

class Main extends React.Component {
  render() {
    return (
      <>
        <section class="HEADER">HEADER</section>
        <section class="mainLayer">
          <div id="userBox" class="mainInnerLayer">
            ASDF
          </div>
          <div id="contentBox" class="mainInnerLayer">
            <div class="mainBanner">{"aaa"} </div>
            <div>
              {/* <Frame data={this.state.videoList}></Frame> */}
              <div class="contentBoxDisplay">
                <SampleView data={this.state.videoList}></SampleView>
              </div>
              {/* <div class="contentBoxDisplay">
                <div class="Xbox">
                  <a href="/index_view.html">
                    <div class="sampleImg">IMG</div>
                    <div class="titleText">SampleText</div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section class="FOOTER">FOOTER</section>
      </>
    );
  }
}

export default Main