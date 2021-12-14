import React from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function VideoView() {

    // const location = useLocation()
    const Navigate = useNavigate()
    const params = useParams()
    const location = useLocation()

    console.log(Navigate)
    console.log(params)
    console.log(location)

    const state = location.state

    console.log(state)

    console.log("This is VideoView File")
    // console.log(this.props.match.params.data)

    var Video = `https://firebasestorage.googleapis.com/v0/b/streaming-app-e3e3f.appspot.com/o/video%2F` + state.vid + `.mp4?alt=media`
    console.log("VIDEO LINK")
    console.log(Video)
    return (
      <>
        <section class="HEADER">HEADER</section>
        <section class="mainLayer">
          <div id="userBox" class="mainInnerLayer">
            ASDF
          </div>
          <div id="contentBox" class="mainInnerLayer">
            <div class="videoPlayer">
              <div class="videoLayer">
                <div>
                  <video
                    src={Video}
                    autoplay="true"
                    controls
                  >
                    ?
                  </video>
                </div>
              </div>
              <div class="captionLayer">
                <div class="captionTitle">
                  <div class="VideoTitle">SAMPLE VIDEO TITLE</div>
                  <div class="VideoInteraction">
                    <div>FAVORITE</div>
                    <div>DOWNLOAD</div>
                  </div>
                </div>
                <div class="VideoCaption">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi quidem nam quo animi libero, aut voluptatum?
                  Consectetur molestiae ullam repellat quis placeat numquam
                  repudiandae. Omnis quae qui consequuntur asperiores inventore.
                </div>
              </div>
            </div>
            <div class="contentBoxDisplay">
              <div class="Xbox">
                <a href="/index_view.html">
                  <div class="sampleImg">IMG</div>
                  <div class="titleText">SampleText</div>
                </a>
              </div>
              <div class="Xbox">
                <a href="/index_view.html">
                  <div class="sampleImg">IMG</div>
                  <div class="titleText">SampleText</div>
                </a>
              </div>
              <div class="Xbox">
                <a href="/index_view.html">
                  <div class="sampleImg">IMG</div>
                  <div class="titleText">SampleText</div>
                </a>
              </div>
              <div class="Xbox">
                <a href="/index_view.html">
                  <div class="sampleImg">IMG</div>
                  <div class="titleText">SampleText</div>
                </a>
              </div>
              <div class="Xbox">
                <a href="/index_view.html">
                  <div class="sampleImg">IMG</div>
                  <div class="titleText">SampleText</div>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <section class="FOOTER">FOOTER</section>
      </>
    );
  }

export default VideoView;
