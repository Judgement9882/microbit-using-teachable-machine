// 모델 URL과 포트 번호 입력 (여기만 바꿔주세요)******
const modelURL = 'https://teachablemachine.withgoogle.com/models/cUZ7RPaDh/';
const serialPort = 'COM6'; // 연결된 포트 번호
//****************************************************

// 변수 선언
let classifier;
let serial;
let video;
let flippedVideo;
let label;

// preload() : setup() 은 preload() 작동이 끝날 때 까지 기다림.
function preload() {
  
    // ml5 라이브러리 : tensorflow.js로 생성된 머신러닝 알고리즘, 모델에 대한 외부 의존성 없이 브라우저 접근 허용.
    classifier = ml5.imageClassifier(modelURL + 'model.json');

    // 미리 정의한 p5.SerialPort.js에서 객체 생성
    serial = new p5.SerialPort();
}

function setup() {
    serial.open(serialPort); // 입력한 포트 open
    createCanvas(320, 260); // 화면을 표시할 캔버스를 그리는 명령
    video = createCapture(VIDEO); // 비디오 객체 생성
    video.size(320, 240); // 비디오 사이즈는 320x240
    video.hide(); // 비디오 화면을 안보이게끔
    classifyVideo(); // classfyVideo 함수 실행
}

function draw() {
    background(0); // gray scale 배경색 설정 
    image(flippedVideo, 0, 0);
    fill(255); // 채움색 설정 (흰색글씨)
    textAlign(CENTER); // 중앙 정렬
    textSize(16); // 글자 크기
    text(label, width / 2, height - 4); // 글자 위치 설정
}

// 비디오 영상을 입력받아 모델에서 분류하는 함수
function classifyVideo() {
    // ml5 라이브러리를 이용하여 비디오를 뒤집어서 flippedVideo 에 저장(웹캠을 그냥 쓰면 화면이 좌우반전되어 나옴)
    flippedVideo = ml5.flipImage(video); 
  
    // classify(input, callback)
    // input 영상을 모델에 넣어 분류를 한 후 callback 함수 실행. 분류된 결과값은 error or results에 있음.
    classifier.classify(flippedVideo, gotResult);
  
    // 사용한 flippedVideo 삭제
    flippedVideo.remove();
}

// 영상 분류 결과값을 받아 분류값을 시리얼통신으로 전송
function gotResult(error, results) {
    // 에러일경우
    if (error) {
        console.error(error); // error 출력
        return; 
    }
    
    // 결과값을 문자열로 바꿔서 label에 저장
    label = String(results[0].label);
    console.log(label); // label 출력
    
    serial.write(label); // label 송신
    classifyVideo(); // 다시 분류 시작
}

// 출처 : https://editor.p5js.org/krantas/sketches/IKUf43rB