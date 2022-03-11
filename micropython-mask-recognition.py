from microbit import *
import music

uart.init(9600)

tune = ["C:1"]

# uart test
msg_byte = uart.read()
display.scroll(str(msg_byte)) # print None

while True:
    msg_byte = uart.read() # bytes type
    msg_str = str(msg_byte) # bytes -> str

# output : Mask or NoMask
    if msg_str[2:6] == 'Mask':
        display.show(Image.HAPPY)
    if msg_str[2:8] == 'NoMask':
        display.show(Image.NO)
        pin1.write_digital(1) # led on
        music.play(tune) # warning sign
        sleep(1000) 
        pin1.write_digital(0) # led off
