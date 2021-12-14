import React, { state, useState, setState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { ref } from "firebase/database";

class VideoUpload extends React.Component {
  state = {
    file: null,
  };

  //   rules_version = '2';
  // service firebase.storage {
  //   match /b/{bucket}/o {
  //     match /{allPaths=**} {
  //       allow write: if request.auth != null;
  //       allow read;
  //     }
  //   }
  // }

  onSubmit(params) {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초

    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var register_code = year + `` + month + date + minutes + seconds;

    console.log(register_code);

    var ar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    register_code = register_code + "_";
    for (var i = 0; i < 6; i++) {
      register_code =
        register_code + ar.charAt(Math.floor(Math.random() * ar.length));
    }

    console.log(register_code);

    if (this.state.file != null) {
      console.log(this.state.file);

      var file = this.state.file;
      var storage = firebase.storage()
      var ImageRef = storage.ref("video");

    //   firebase
    //     .storage()
    //     .ref()
    //     .child("/video/" + register_code)
    //     .put(file)
    //     .then(function (snapshot) {
    //       console.log("UPLOADED");
    //     });

      try {
          ImageRef.child(file.name).put(file);
      } catch (error) {
        console.log("error", error);
      }
    } else if (this.state.file == null) {
      console.log("EMPTY FILE");
    }
  }

  onFileChange = (params) => {
    console.log(params);
    console.log(params.target);
    console.log(params.target.value);

    const reader = new FileReader();
    reader.readAsDataURL(params.target.files[0]);

    reader.onload = async (e) => {
      console.log(e);
    };

    this.state.file = params.target.files[0];
    this.setState(this.state);
  };

  render() {
    this.onSubmit = this.onSubmit.bind(this);

    return (
      <>
        <input type="file" accept="image/*" onChange={this.onFileChange} />
        <button onClick={this.onSubmit}>업로드</button>
      </>
    );
  }
}

export default VideoUpload;
