# Autonomous Robot - ENPH 253 Competition
## 2025

### Skills
PCB Design · KiCAD · Prototyping · C++ · Soldering · Circuit Design · OOP 

### Description and Outcome

Github Repository:
* [ENPH_253_Robot](https://github.com/emajkic/ENPH_253_Robot)

This project was completed for ENPH 253. In this course, students form teams and build autonomous robots to participate in a competition. The [2025 Competition](https://projectlab.engphys.ubc.ca/enph-253-2025/) involved the robots collecting Beanie Babies from various positions along an obstacle course and returning them to a safe zone. The competition takes place over a 6 week build and design cycle.

Here are some images of the final robot taken from various angles: 

<div class="figure-row">
  <figure>
    <img src="/static/assets/img/marshall with lid.png" alt="Robot without basket">
    <figcaption>
      Top view of the robot
    </figcaption>
 </figure>

 <figure>
    <img src="/static/assets/img/marshall_w_basket.png" alt="Robot with basket" width="300" height="auto">
    <figcaption>
      Side view of the robot (with the basket)
    </figcaption>
  </figure>
</div>

My responsibilities focused on the electrical and software design of our robot. The electrical side involved designing our H-Bridge PCBs, power distribution, and claw integration circuits. For the software, I wrote C++ libraries to communicate and process data from the many sensors we used and control our actuators.  

The beanie babies were not marked on the course, and so they had to be detected by some alternate method. One of my major tasks was combining 1D LiDAR sensors (Pololu VL53L1X) with servo motors to form our own 2D LiDAR devices. This involved writing libraries for the servo motors, the LiDARs, and a class combining them that would be used to obtain the data that would be used to identify pets. 

I also calculated data to ensure these sensors could reliably detect pets based on the data the LiDARs collected. 

Our robot relied on PID control to enable line following. The PID logic was done in software, but relied on a digital phototransistor circuit and H-Bridges to locate the line and control our motors. The H-Bridge schematic is pictured below, anlong with an image of the actual PCB:

<figure>
    <img src="/static/assets/img/h_bridge_schematic.png" alt="H Bridge Schematic">
    <figcaption>
      H-Bridge Schematic
    </figcaption>
 </figure>

<div class="figure-row">
 <figure>
    <img src="/static/assets/img/pcb_view.png" alt="H Bridge PCB Design" width="300" height="auto">
    <figcaption>
      Image of PCB taken from KiCAD's 3D visualiser
    </figcaption>
  </figure>

  <figure>
    <img src="/static/assets/img/hbridge.png" alt="H Bridge PCB" width="300" height="auto">
    <figcaption>
      Image of PCB once all elements were soldered on
    </figcaption>
  </figure>

</div>

I also designed the circuit that enabled us to recieve input from a hall effect sensor placed in the head of the claw, as this would allow verification that the robot had detected a pet before lifting it. That circuit schematic is here: 

<figure>
    <img src="/static/assets/img/hall_schematic.png" alt="Hall Circuit Schematic" width="500" height="auto">
    <figcaption>
      Image of Hall effect sensor circuit
    </figcaption>
</figure>



