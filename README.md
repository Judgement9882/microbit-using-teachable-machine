πμ΄ νλ‘μ νΈλ ν°μ²λΈλ¨Έμ μΌλ‘ κ°λ¨ν λͺ¨λΈμ λ§λ€κ³  κ·Έ λͺ¨λΈμ μλ² λλλ³΄λ micro:bit V2μμ μ¬μ©νλ λ°©λ²μ λ€λ£Ήλλ€.π

- λ§μ€ν¬ κ°μ§


![Animation1](https://user-images.githubusercontent.com/79979086/157808573-fa8b7cd6-bcbb-4baf-9017-5d059115552c.gif)

- μμ± μΈμ (λ©μΆ°!)


![Animation2](https://user-images.githubusercontent.com/79979086/157809237-c87bfad5-12ca-4fd1-ab9b-ef7abd52b2f9.gif)


#
- κ΅¬μ±λ

![image](https://user-images.githubusercontent.com/79979086/162358186-a5af82b9-37f7-4f6f-9f30-2cfaafb4f4ce.png)


#
π₯ 

- Teachable Machine https://teachablemachine.withgoogle.com/
- micro:bit V2 https://microbit.org/ko/
- p5.js https://p5js.org/
- p5.serialcontrol https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2
- micro python https://python.microbit.org/v/2?l=ko

π₯
#
# Step 1 - Using Teachable Machine. Upload the trained model.

- ν°μ²λΈλ¨Έμ  μΉνμ΄μ§λ‘ λ€μ΄κ° μνλ λ°©μμΌλ‘ λͺ¨λΈμ νμ΅μν΅λλ€. 
- μμ μμλ λ§μ€ν¬λ₯Ό μΌμ λ "Mask", μ°μ§ μμμ λ "NoMask" λ‘ νμ΅μ μμΌ°μ΅λλ€.
- νμ΅ μ΄ν tensorflow.js ν­μμ λͺ¨λΈμ μλ‘λν©λλ€.

![image](https://user-images.githubusercontent.com/79979086/157226956-5a6c65d1-7ed6-43c2-a70e-b76adc70772d.png)

- μ΄λ μμ±λ λ§ν¬λ₯Ό κΌ­ κΈ°μ΅ν΄μ£ΌμΈμ.

#
# Step 2 - Open the serial port by using p5.serialcontrol.exe.

https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2

- μ λ§ν¬μμ OSμ λ§κ² νλ‘κ·Έλ¨μ λ€μ΄λ‘λ ν©λλ€.
- λ§μ΄ν¬λ‘λΉνΈλ₯Ό PCμ μ°κ²°ν©λλ€.
- λ€μ΄λ°μ μμΆνμΌμ νμ΄μ€λλ€.
- μ΄λ€ ν¬νΈμ λ§μ΄ν¬λ‘λΉνΈκ° μ°κ²°λλμ§ νμΈν©λλ€.

![image](https://user-images.githubusercontent.com/79979086/157228873-9c4e79b8-229b-4f95-93d5-c6d10ec8158c.png)

- ν΄λΉ ν¬νΈλ₯Ό νλ‘κ·Έλ¨μ μ΄μ©ν΄ μ΄μ΄μ€λλ€.

![image](https://user-images.githubusercontent.com/79979086/157228509-4fc245ff-3866-4f6c-bb0b-0acc62a4fcdf.png)

#
# Step 3 - Upload micro python code to micro:bit V2.

- p5.js editor μμ ν°μ²λΈ λ¨Έμ μμ νμ΅μν¨ λͺ¨λΈμ outputμ microbitλ‘ λ³΄λ΄λ €κ³  ν©λλ€.
- μ΄λ UART λ°©μμΌλ‘ λ°μ΄ν°λ₯Ό μ μ‘νλλ°, ν΄λΉ λ°μ΄ν° νμμ bytes νμμλλ€.
- micro python UART library : https://microbit-micropython.readthedocs.io/en/latest/uart.html#module-microbit.uart

- λν νλ² λ°μ΄ν°λ₯Ό μ μ‘ν  λ λ²νΌλ₯Ό λ€ μ±μμΌλ§ λ°μ΄ν°λ₯Ό μ μ‘ν©λλ€.
- λ§μ΄ν¬λ‘λΉνΈκ° λ°λ λ°μ΄ν°λ νλμ output λΏλ§ μλλΌ μ¬λ¬ outputμ΄ κ°μ΄ λ€μ΄κ°λλ€.
- κ·Έλμ λ°μ΄ν°λ₯Ό slicing νμ¬ λ§μ΄ν¬λ‘λΉνΈλ₯Ό μ μ΄νμ΅λλ€.

![image](https://user-images.githubusercontent.com/79979086/157785531-a61f0722-a8b4-413f-8a49-498b667c2d18.png)


- "micropython-mask-recognition.py" ν΄λΉ νμΌμ bytes typeμΌλ‘ λ€μ΄μ¨ λͺ¨λΈμ output 'Mask'μ 'NoMask'μ μ΄μ©ν μ½λμλλ€. 
- μ΄μΈμλ led on, led off λ± λ€μν μ μ΄λ₯Ό ν  μ μμ΅λλ€.
- ν΄λΉ νμΌμ μ½λλ₯Ό μλμ λ§μ΄ν¬λ‘ νμ΄μ¬ μΉνμ΄μ§μ λ³΅μ¬-λΆμ¬λ£κΈ° ν λ§μ΄ν¬λ‘λΉνΈμ μλ‘λ ν©λλ€.
- micro python webpage : https://python.microbit.org/v/2?l=ko


#
# Step 4 - In p5.js editor, connect to the uploaded model and modify the code if you want.

- p5.js editor μμμ λͺ¨λΈμ μλ ₯λ°κ³  outputμ micro:bit V2λ‘ λ³΄λ΄μ€κ²λλ€.
- λͺ¨λΈμ μ¬μ©νλ €λ©΄ ml5.jsλ₯Ό include ν΄μΌνκ³  UART ν΅μ μ νλ €λ©΄ p5.serialport.jsλ₯Ό index.htmlμμ include ν΄μΌν©λλ€.
- p5.serialport.jsμ index.html, schetch.jsλ₯Ό p5.js editorμ μλ‘λν©λλ€.
- μμ  p5.js editor : https://editor.p5js.org/Judgement9882/sketches/fbHYZf95Y

![image](https://user-images.githubusercontent.com/79979086/157806852-1086ae8e-dd4c-4869-8cda-6b2e09244ad5.png)

- sckech.jsμμ modelURLκ³Ό serialPortλ₯Ό μμ μ νκ²½μ λ§κ² μμ .

![image](https://user-images.githubusercontent.com/79979086/157806974-04d5faed-35ad-4c92-9dbd-f48894476d86.png)

- gotResult ν¨μμμ μνλλλ‘ λ°μ΄ν°λ₯Ό λ³΄λ΄μ μ¬μ©ν©λλ€.



# μμ± νμ΅ μμ 
https://youtu.be/-yLTG8KOEW0


https://youtu.be/eHshbmhtN-k




