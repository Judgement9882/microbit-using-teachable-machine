### This project makes a model created simply by using a teachable machine to work on the embedded board micro:bit V2.

#
🔥 

- Teachable Machine https://teachablemachine.withgoogle.com/
- micro:bit V2 https://microbit.org/ko/
- p5.js https://p5js.org/
- p5.serialcontrol https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2
- micro python https://python.microbit.org/v/2?l=ko

🔥
#
# Step 1 - By using Teachable Machine, upload the trained model.

- Train the model the way you want it to.

- After training, upload the tensorflow.js model.

![image](https://user-images.githubusercontent.com/79979086/157226956-5a6c65d1-7ed6-43c2-a70e-b76adc70772d.png)

- Remember the shareable link after the model is uploaded

#
# Step 2 - Open the serial port by using p5.serialcontrol.exe.

https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2

- Click the link above and download the program for your operating system.

- Connect your micro:bit to PC

- Unzip and run p5.serialcontrol.exe

- Check which port the board occupies in device manager

![image](https://user-images.githubusercontent.com/79979086/157228873-9c4e79b8-229b-4f95-93d5-c6d10ec8158c.png)

- Open that port after scanning

![image](https://user-images.githubusercontent.com/79979086/157228509-4fc245ff-3866-4f6c-bb0b-0acc62a4fcdf.png)

#
# Step 3 - Upload micro python code to micro:bit V2.

- We need to send the output from the machine learning model to microbit via the p5.js editor.
- UART is used in this process and data is transmitted in bytes type.
- micro python UART library : https://microbit-micropython.readthedocs.io/en/latest/uart.html#module-microbit.uart

- Also, when sending data once, it is sent only when the buffer is full.
- We cut the first part of the output and use it.
- 

(마이크로파이썬 ppt 40쪽 코드 텍스트로 올리고 복사 붙여넣기 하고 업로드 하기 적어야함.)

#
# Step 4 - In p5.js editor, connect to the uploaded model and modify the code if you want.


