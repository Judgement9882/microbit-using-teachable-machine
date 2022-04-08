🏆이 프로젝트는 티처블머신으로 간단히 모델을 만들고 그 모델을 임베디드보드 micro:bit V2에서 사용하는 방법을 다룹니다.🏆

- 마스크 감지


![Animation1](https://user-images.githubusercontent.com/79979086/157808573-fa8b7cd6-bcbb-4baf-9017-5d059115552c.gif)

- 음성 인식 (멈춰!)


![Animation2](https://user-images.githubusercontent.com/79979086/157809237-c87bfad5-12ca-4fd1-ab9b-ef7abd52b2f9.gif)


#
- 구성도

![image](https://user-images.githubusercontent.com/79979086/162358186-a5af82b9-37f7-4f6f-9f30-2cfaafb4f4ce.png)


#
🔥 

- Teachable Machine https://teachablemachine.withgoogle.com/
- micro:bit V2 https://microbit.org/ko/
- p5.js https://p5js.org/
- p5.serialcontrol https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2
- micro python https://python.microbit.org/v/2?l=ko

🔥
#
# Step 1 - Using Teachable Machine. Upload the trained model.

- 티처블머신 웹페이지로 들어가 원하는 방식으로 모델을 학습시킵니다. 
- 예제에서는 마스크를 썼을 때 "Mask", 쓰지 않았을 떄 "NoMask" 로 학습을 시켰습니다.
- 학습 이후 tensorflow.js 탭에서 모델을 업로드합니다.

![image](https://user-images.githubusercontent.com/79979086/157226956-5a6c65d1-7ed6-43c2-a70e-b76adc70772d.png)

- 이때 생성된 링크를 꼭 기억해주세요.

#
# Step 2 - Open the serial port by using p5.serialcontrol.exe.

https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2

- 위 링크에서 OS에 맞게 프로그램을 다운로드 합니다.
- 마이크로비트를 PC에 연결합니다.
- 다운받은 압축파일을 풀어줍니다.
- 어떤 포트에 마이크로비트가 연결됐는지 확인합니다.

![image](https://user-images.githubusercontent.com/79979086/157228873-9c4e79b8-229b-4f95-93d5-c6d10ec8158c.png)

- 해당 포트를 프로그램을 이용해 열어줍니다.

![image](https://user-images.githubusercontent.com/79979086/157228509-4fc245ff-3866-4f6c-bb0b-0acc62a4fcdf.png)

#
# Step 3 - Upload micro python code to micro:bit V2.

- p5.js editor 에서 티처블 머신에서 학습시킨 모델의 output을 microbit로 보내려고 합니다.
- 이때 UART 방식으로 데이터를 전송하는데, 해당 데이터 타입은 bytes 타입입니다.
- micro python UART library : https://microbit-micropython.readthedocs.io/en/latest/uart.html#module-microbit.uart

- 또한 한번 데이터를 전송할 때 버퍼를 다 채워야만 데이터를 전송합니다.
- 마이크로비트가 받는 데이터는 하나의 output 뿐만 아니라 여러 output이 같이 들어갑니다.
- 그래서 데이터를 slicing 하여 마이크로비트를 제어했습니다.

![image](https://user-images.githubusercontent.com/79979086/157785531-a61f0722-a8b4-413f-8a49-498b667c2d18.png)


- "micropython-mask-recognition.py" 해당 파일은 bytes type으로 들어온 모델의 output 'Mask'와 'NoMask'을 이용한 코드입니다. 
- 이외에도 led on, led off 등 다양한 제어를 할 수 있습니다.
- 해당 파일의 코드를 아래의 마이크로 파이썬 웹페이지에 복사-붙여넣기 후 마이크로비트에 업로드 합니다.
- micro python webpage : https://python.microbit.org/v/2?l=ko


#
# Step 4 - In p5.js editor, connect to the uploaded model and modify the code if you want.

- p5.js editor 상에서 모델을 입력받고 output을 micro:bit V2로 보내줄겁니다.
- 모델을 사용하려면 ml5.js를 include 해야하고 UART 통신을 하려면 p5.serialport.js를 index.html에서 include 해야합니다.
- p5.serialport.js와 index.html, schetch.js를 p5.js editor에 업로드합니다.
- 예제 p5.js editor : https://editor.p5js.org/Judgement9882/sketches/fbHYZf95Y

![image](https://user-images.githubusercontent.com/79979086/157806852-1086ae8e-dd4c-4869-8cda-6b2e09244ad5.png)

- sckech.js에서 modelURL과 serialPort를 자신의 환경에 맞게 수정.

![image](https://user-images.githubusercontent.com/79979086/157806974-04d5faed-35ad-4c92-9dbd-f48894476d86.png)

- gotResult 함수에서 원하는대로 데이터를 보내서 사용합니다.



# 음성 학습 예제
https://youtu.be/-yLTG8KOEW0


https://youtu.be/eHshbmhtN-k




